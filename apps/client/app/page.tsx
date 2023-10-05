import LoginButton from "@client/components/loginButton"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {/* <div className="bg-emerald rounded p-4">                                // this will be in loginPage.tsx, just here for testing purposes for now
        <ul className="flex gap-2 flex-col">
          <li>
            <LoginButton imageRef="google-circle.svg" signIn="Google" />
          </li>
          <li>
            <LoginButton imageRef="apple-mac.svg" signIn="Apple" />
          </li>
        </ul>
      </div> */}

      {/* <div className="flex flex-col bg-slate-900 rounded gap-1 p-4">                  // not sure how this will get broken up, probably a different page(?) 
        <label className="text-lg" htmlFor="username">Choose a username:</label>          // and button might need to be made into a component
        <input className="rounded pl-1 text-black" type="text" id="username" required />
        <div className="flex ml-auto mt-3">
          <button className="rounded bg-emerald text-slate-900 font-bold text-md p-3">Enter</button>
        </div>
      </div> */}
    </main>
  )
}
