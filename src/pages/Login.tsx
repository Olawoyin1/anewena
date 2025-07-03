import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Login = () => {
  return (
    <section>

        <Navbar />
        <div className="flex w-full">
  <div className="relative w-[520px] max-w-full mx-auto px-[90px] pb-[45px] mt-10 text-[12px] leading-[20px] tracking-[0.33px] text-neutral-900 font-normal">
    {/* Login Section */}
    <div>
      <div className="font-bold text-[17px] leading-[23px] text-center uppercase text-neutral-900 mb-10">Login</div>
      <form method="post" className="space-y-4">
        <div>
          <label
            htmlFor="username"
            className="pb-2 font-semibold text-[12px] leading-[12px] tracking-[0.6px] uppercase text-neutral-900 block"
          >
            Username or email address <span>*</span>
          </label>
          <input
            type="text"
            name="username"
            autoComplete="username"
            className="w-full font-medium text-[13px] leading-[18px] tracking-[0.39px] text-neutral-900 border border-gray-300 p-[10px_15px] bg-white appearance-none outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="pb-2 font-semibold text-[12px] leading-[12px] tracking-[0.6px] uppercase text-neutral-900 block"
          >
            Password <span>*</span>
          </label>
          <div className="relative">
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              className="w-full font-medium text-[13px] leading-[18px] tracking-[0.39px] text-neutral-900 border border-gray-300 p-[10px_15px] bg-white appearance-none outline-none"
            />
            <button
              type="button"
              aria-label="Show password"
              aria-describedby="password"
              className="absolute right-0 top-0 h-[40px] w-[40px] flex items-center justify-center text-[12px] text-neutral-900"
            >
              {/* Add eye icon if needed */}
            </button>
          </div>
        </div>

        <div className="mt-6 flex items-center capitalize">
          <input
            type="checkbox"
            name="rememberme"
            value="forever"
            className="w-[18px] h-[18px] mr-3 appearance-none border border-gray-700 checked:bg-black checked:border-black"
          />
          Remember me
          <div className="ml-auto">
            <a href="/lost-password" className="underline text-neutral-900">Lost your password?</a>
          </div>
        </div>

        <div className="mt-5">
          <button
            type="submit"
            name="login"
            value="Log in"
            className="w-full bg-[#c69657] text-white border border-[#c69657] font-semibold text-[12px] leading-[12px] tracking-[0.72px] uppercase py-[18px] px-[50px]"
          >
            Log in
          </button>
        </div>

        <div className="flex justify-center mt-8 text-[13px] capitalize">
          Not a Member?
          <a href="#" className="ml-2 underline text-neutral-900">Register</a>
        </div>
      </form>
    </div>

    {/* Hidden Register Section (if needed in UI logic) */}
    <div className="hidden">
      {/* Register form structure would go here if toggled */}
    </div>
  </div>
</div>
    <Footer />
    </section>
  )
}

export default Login