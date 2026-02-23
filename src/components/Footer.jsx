export default function Footer() {
    return (
        <div className="mt-20">
            <div className="text-center">
                <a href="#!">
                    <img src="/assets/A.png" alt="logo" className="w-40 mx-auto mb-0 dark:hidden" />
                    <img src="/assets/Anchal.png" alt="logo" className="w-40 mx-auto mb-0 hidden dark:block" />
                </a>

                <div className="w-max flex items-center gap-2 mx-auto">
                    <img src="./assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="./assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />

                    <a href="mailto:anchalbaghel2001@gmail.com">anchalbaghel2001@gmail.com</a>
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
            {/*  <p>© {new Date().getFullYear()} <a href="https://prebuiltui.com" target="_blank">PrebuiltUI</a> • Distributed by <a href="https://themewagon.com" target="_blank">ThemeWagon</a> • All rights reserved.</p> */}
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><a href="https://github.com/anchal-baghel">GitHub</a></li>
                    <li><a href="https://linkedin.com/in/anchal-baghel-4644513b1">LinkedIn</a></li>
                    
                </ul>
            </div>
        </div>
    )
}

   
  