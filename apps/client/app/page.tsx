import LoginButton from "@client/components/loginButton"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul className="flex gap-2 flex-col ">
        <li>
          <LoginButton imageRef="google-circle.svg" signIn="Google" />
        </li>
        <li>
          <LoginButton imageRef="apple-mac.svg" signIn="Apple" />
        </li>
      </ul>
    </main>
  )
}
