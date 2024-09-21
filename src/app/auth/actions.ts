"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { title } from "process";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const supabase = createClientComponentClient();

export async function writeToastError(error: string) {
  toast.error(error, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
export async function writeErrorSwal(error: string) {
  Swal.fire({
    title: "Wait a minute…",
    text: `${error}. Nearly done, your evolution is just one step away!`,
    icon: "error",
    iconColor: "#695CFF",
    confirmButtonText: "OK",
    confirmButtonColor: "#695CFF",
  });
}
export async function writeSuccessSwal(data: any) {
  Swal.fire({
    title: data.title,
    text: data.message,
    //icon: "success",
    //iconColor: "#695CFF",
    confirmButtonText: "OK",
    confirmButtonColor: "#695CFF",
    imageUrl: "/images/logo/logo-icon.svg",
    imageWidth: 200,
    imageHeight: 100,
  });
}

export async function handleSignIn(email: string, password: string) {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      await writeErrorSwal(error.message);
    } else {
      return "/dashboard";
    }
  } catch (error) {
    if (error instanceof Error) {
      writeToastError(error.message);
    }
  }
}

export async function handleGoogleSignIn() {
  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      return "/dashboard";
    }
  } catch (error) {
    if (error instanceof Error) {
      writeToastError(error.message);
    }
  }
}

export async function handleSignUp(data: any) {
  try {
    if (data.password != data.re_type_password) {
      await writeErrorSwal("Passwords do not match");
    } else {
      const emailExists = await checkIfEmailExists(data.email);

      if (emailExists) {
        await writeErrorSwal("Email already exists");
        return;
      } else {
        const { error } = await supabase.auth.signUp({
          email: data.email,
          password: data.password,
          options: {
            emailRedirectTo:`${window.location.origin}`,    
            data: {
              first_name: data.first_name,
              last_name: data.last_name,
            },
          },
        });
        if (error) {
          await writeErrorSwal(error.message);
        } else {
          await writeSuccessSwal({
            title: "Your transformation journey begins now!",
            message:
              "Check your email and confirm your sign-up to continue the path toward a new brand identity.",
          });
          //router.push("/dashboard");
          return "/dashboard";
        }
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      writeToastError(error.message);
    }
  }
}

export async function checkIfEmailExists(email: string): Promise<boolean> {
  const { data, error } = await supabase.rpc("check_if_email_exists", {
    email_to_check: email,
  });
  if (error) {
    await writeToastError(error.message);
    throw error;
  }
  return data as boolean;
}

export async function handleResetPassword(data:any) {
  try {
    if (data.password != data.re_type_password) {
      await writeErrorSwal("Passwords do not match");
    }
    else{
      const { error } = await supabase.auth.updateUser(
        {
          password :data.password       
        }
      )
  
      if (error) {
        await writeErrorSwal(error.message);        
      } else {
        await writeSuccessSwal({
          title: "Your transformation journey continue now!",
          message:"Password updated successfully, continue the path toward a new brand identity.",
        });
        //router.push("/auth/signin");
        return "/auth/signin";
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      writeToastError(error.message);
    }
  }
}


export async function hndleSendEmailResetPassword(email:string) {
  const emailExists = await checkIfEmailExists(email);

    if (!emailExists) {
      await writeErrorSwal("Email does not exists");
    } else {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email,
        {redirectTo: `${window.location.origin}`}
      );

      if (error) {

        await writeErrorSwal(error.message);        
      } else {
        await writeSuccessSwal({
          title:"Nearly done, reset password link sent",
          message:"Please check your email and reset you password to continue the path toward a new brand identity."
        });
        return "/dashboard"
        //router.push("/dashboard");
      }
    }
}