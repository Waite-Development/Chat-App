// the google and apple login buttons oauth

type Props = {
    imageRef: string;
    signIn: string;
}

export default function LoginButton(props: Props) {
    return (
        <div className="flex rounded bg-slate-900 p-3">
            <button className="flex items-center space-x-3"> {<img src={props.imageRef} />} <span>Sign in with {props.signIn}</span></button>
        </div>
    );
};