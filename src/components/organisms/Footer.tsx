// constants
import { footerText } from "@/src/constants/footer.constants";

function Footer() {
  return (
    <div className="flex justify-center px-1 md:px-5">
      <footer className="text-sm text-center py-2 bg-customPrimary text-white rounded-t-lg w-full">
        <p>
          &copy; {new Date().getFullYear()} {footerText.copyright}
        </p>
      </footer>
    </div>
  );
}

export default Footer;
