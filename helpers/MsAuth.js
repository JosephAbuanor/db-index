const APP_ID = "b88812b6-9963-4ed1-8714-a1bed92cab81";
const APP_SECERET = "5cTRluJ-2nS-Vi.~-OH0shdOi_a8GV94AH";
const TOKEN_ENDPOINT =
  "https://login.microsoftonline.com/b20a8f4d-0d6a-4f2e-83a2-181c968f8882/oauth2/v2.0/token";
const MS_GRAPH_SCOPE = "https://graph.microsoft.com/.default";
const TENENAT_ID = "b20a8f4d-0d6a-4f2e-83a2-181c968f8882";
const code =
  "0.ATwATY8KsmoNLk-Dohgclo-IgrYSiLhjmdFOhxShvtksq4EgAI8.AQABAAIAAABeStGSRwwnTq2vHplZ9KL4fm5tu3o-utmxFOKr8boxJL5aYjoqB_jY7_YnOeIWMZ_mnd2T3iZdpZYiyPaLn8Lcw5LloHp2TL-0M8imqXZlKAAfYZ8Dj3j56oljDFAJlzWpJRcRLaqXR6sKIOqDtNxJFdpGesWxYGMtsakOhQbSghA9DM_DS2grG98b1vVDgmNkGud_pGBf2e7LY_qRIGD-8wtjx6fi97MyCUUTSEyj-Z1eOfzaONQcf4zOBArL_J6Y1V8fWLkMbg_xpefMtOR5cawnp3iZCG59AmQPbcz_QLNgHOkO6uNRvRx8idP8ToqeZannbvC-0NuUHO5LHrTgibobkQMIU48eMOplJUvCNTfeoM-WLbRWDLL5qs5f1k0p1EtDCRlMtqNSXM2MNvE8b4Okq9os5B2LfMa-cAVbKHcWRQn2PMqxCffZuCEllzfSzC7_Lx4b55-B7VUSe89xhLo0F4nBqKGt2rM0D_-PFwrnK7JFjcD_pRlkjqGO_AG9Flmtr6DAHgQAcOEFsT9Ir9bvUFcJCY1zPO7ytZFphdRVgMdzqDaaLyew91Rlu1OiM6r9ezTmLpQtuwogGhzyPmGbEzXelb2ydOj8KQpmQiAA&state=12345&session_state=803a95d8-6cae-44b4-8a8e-2d617d33e7aa";
const redirect_uri = "localhost:5301";

const axios = require("axios");
const qs = require("qs");

const postData = {
  client_id: APP_ID,
  scope: MS_GRAPH_SCOPE,
  client_secret: APP_SECERET,
  tenant_id: TENENAT_ID,
  grant_type: "client_credentials",
  code,
  redirect_uri,
};

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

let token = "";

axios
  .post(TOKEN_ENDPOINT, qs.stringify(postData))
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
    return "error";
  });
