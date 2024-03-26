const redirectToRemoteLogout = (req, res) => {

  console.log('req.session',req.session)

  const redirectUrl = new URL(req.session.redirectUrl);
  // console.log('____req.query',req.query);
  // let user = req.user
  // console.log('user',user);

  const idToken = req.query.idToken;
  // console.log('__________idToken',idToken)
  // const url = req.strategy._client.endSessionUrl(idToken);
  // url = url+"&post_logout_redirect_uri="+redirectUrl
  

  // console.log('url',url)
  // let options = {
  //     post_logout_redirect_uri:redirectUrl,
  // }

  // // if(user['idToken']!=undefined){
  // //   options.id_token_hint=user['idToken']
  // // }


let options = {
  post_logout_redirect_uri:redirectUrl.toString(),
}

if(idToken!=undefined){
  options.id_token_hint=idToken
}

  const url=req.strategy._client.endSessionUrl(options)



  res.writeHead(302, { Location: url.toString() });
  res.end();

  // res.redirect(url);
  // next();

};

module.exports = redirectToRemoteLogout;
