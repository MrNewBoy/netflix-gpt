export const LOGO_URL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const PROFILE_IMG =
  "https://occ-0-2610-3663.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQ1dcB2h5seWi_VxDdEMQWUGVzz9MJg7qldqWlva91-QmXxsfD5lcg77M2S45VodVtyN1MI6mhFvGDT2yeNGNs8JcKStifM.png?r=145";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`,
  },
};
export const MOVIE_CARD_IMG = "https://image.tmdb.org/t/p/w500";

export const BKG_IMG_LOGIN =
  "https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const SUPPORTED_LANG = [
  { lang: "English", key: "en" },
  { lang: "Hindi", key: "hindi" },
  { lang: "Spanish", key: "spanish" },
];

export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY;
