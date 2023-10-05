import LoginButton from "@client/components/loginButton"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="bg-emerald rounded p-4">
        <ul className="flex gap-2 flex-col">
          <li>
            <LoginButton imageRef="google-circle.svg" signIn="Google" />
          </li>
          <li>
            <LoginButton imageRef="apple-mac.svg" signIn="Apple" />
          </li>
        </ul>
      </div>
    </main>
  )
}
