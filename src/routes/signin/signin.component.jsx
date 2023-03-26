import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
function Signin() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const user = await createUserDocumentFromAuth(response.user);
    console.log(user);
  };
  return (
    <div>
      <button onClick={logGoogleUser}>here</button>
    </div>
  );
}

export default Signin;
