const GUEST_KEY = 'jcGuest123';

export default function createGuestJWT(username, email, apiKey) {
  var data = {
    apiKey,
    userId: 'guest',
    userPic: null,
    userUrl: null,
    userEmail: email,
    username,
  };
  return `${GUEST_KEY}===${JSON.stringify(data)}`;
}