'use server'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { redirect, useSearchParams, useRouter} from 'next/navigation';

const supabase= createClientComponentClient()
const router= useRouter();
export async function ResetPassword(password:string,re_type_password:string) {
    if (password !== re_type_password) {
        await writeToastError("Passwords do not match");
      } else {
        const { error } = await supabase.auth.updateUser({
          password
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
          await Swal.fire({
            title: "Password updated successfully",
            icon: "success",
            iconColor: "#695CFF",
            confirmButtonText: "OK",
            confirmButtonColor: "#695CFF",
          });
          router.push("/auth/signin");
        }
      }
}
export async function writeToastError(error:string) {
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
