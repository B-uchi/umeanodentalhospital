import { redirect } from "next/navigation";

export default function GalleryRoot() {
  redirect("/gallery/photos");
}
