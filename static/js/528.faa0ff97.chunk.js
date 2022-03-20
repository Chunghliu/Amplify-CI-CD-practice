"use strict";(self.webpackChunkreact_aws=self.webpackChunkreact_aws||[]).push([[528],{2528:function(t,e,n){n.r(e),n.d(e,{amplify_amazon_button:function(){return g},amplify_auth0_button:function(){return w},amplify_facebook_button:function(){return I},amplify_google_button:function(){return b},amplify_oauth_button:function(){return y}});var i=n(22),o=n(361),r=n(9028),a=n(8562),u=n(2116),c=n(3730),s=n(1762),h=n(1138),f=function(t,e,n,i){return new(n||(n=Promise))((function(o,r){function a(t){try{c(i.next(t))}catch(e){r(e)}}function u(t){try{c(i.throw(t))}catch(e){r(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}c((i=i.apply(t,e||[])).next())}))},l=function(t,e){var n,i,o,r,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function u(r){return function(u){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,i=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){a.label=r[1];break}if(6===r[0]&&a.label<o[1]){a.label=o[1],o=r;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(r);break}o[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(u){r=[6,u],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,u])}}},d=new o.k("amplify-amazon-button"),g=function(){function t(t){var e=this;(0,i.r)(this,t),this.handleAuthStateChange=h.d,this.federatedSignIn=function(t){var n=t.access_token,i=t.expires_in;if(n){if(!u.g||"function"!==typeof u.g.federatedSignIn||"function"!==typeof u.g.currentAuthenticatedUser)throw new Error(s.N);var o=1e3*i+(new Date).getTime();window.amazon.Login.retrieveProfile((function(t){return f(e,void 0,void 0,(function(){var e,i;return l(this,(function(r){switch(r.label){case 0:return t.success?(e={name:t.profile.Name,email:t.profile.PrimaryEmail},[4,u.g.federatedSignIn("amazon",{token:n,expires_at:o},e)]):[2,d.debug("Get user Info failed")];case 1:return r.sent(),[4,u.g.currentAuthenticatedUser()];case 2:return i=r.sent(),this.handleAuthStateChange(a.A.SignedIn,i),[2]}}))}))}))}}}return t.prototype.signInWithAmazon=function(t){var e=this;t.preventDefault(),window.amazon.Login.setClientId(this.clientId),window.amazon.Login.authorize({scope:"profile"},(function(t){if(t.error)return d.debug("Failed to login with amazon: "+t.error);try{window.localStorage.setItem(s.h,JSON.stringify({provider:"amazon"}))}catch(n){d.debug("Failed to cache auth source into localStorage",n)}e.federatedSignIn(t)}))},t.prototype.render=function(){var t=this;return(0,i.h)("amplify-sign-in-button",{onClick:function(e){return t.signInWithAmazon(e)},provider:"amazon"},(0,i.h)("script",{src:"https://assets.loginwithamazon.com/sdk/na/login1.js"}),r.o.get(c.T.SIGN_IN_WITH_AMAZON))},t}(),p=new o.k("amplify-auth0-button"),w=function(){function t(t){var e=this;(0,i.r)(this,t),this.handleAuthStateChange=h.d,this.handleLoad=function(){var t=u.g.configure().oauth,n=void 0===t?{}:t,i=e.config,o=void 0===i?n.auth0:i;o?(p.debug("auth0 configuration",o),e._auth0||(e._auth0=new window.auth0.WebAuth(o)),e._auth0.parseHash((function(t,n){if(t)p.debug("Failed to parse the url for Auth0",t);else if(n){var i={provider:"auth0",opts:{returnTo:o.returnTo,clientID:o.clientID,federated:o.federated}};try{localStorage.setItem(s.h,JSON.stringify(i))}catch(r){p.debug("Failed to cache auth source into localStorage",r)}e._auth0.client.userInfo(n.accessToken,(function(t,i){return f(e,void 0,void 0,(function(){var e,r,c;return l(this,(function(s){switch(s.label){case 0:return e=void 0,r=void 0,t?p.debug("Failed to get the user info",t):(e=i.name,r=i.email),[4,u.g.federatedSignIn(o.domain,{token:n.idToken,expires_at:1e3*n.expiresIn+(new Date).getTime()},{name:e,email:r})];case 1:return s.sent(),[4,u.g.currentAuthenticatedUser()];case 2:return c=s.sent(),this.handleAuthStateChange(a.A.SignedIn,c),[2]}}))}))}))}else p.debug("Auth0 found no authResult in hash")}))):p.debug("Auth0 is not configured")}}return t.prototype.signInWithAuth0=function(t){if(t.preventDefault(),!this._auth0)throw new Error("the auth0 client is not configured");this._auth0.authorize()},t.prototype.render=function(){var t=this;return(0,i.h)("amplify-sign-in-button",{onClick:function(e){return t.signInWithAuth0(e)},provider:"auth0"},(0,i.h)("script",{onLoad:this.handleLoad,src:"https://cdn.auth0.com/js/auth0/9.11/auth0.min.js"}),r.o.get(c.T.SIGN_IN_WITH_AUTH0))},t}(),m=new o.k("amplify-facebook-button"),I=function(){function t(t){var e=this;(0,i.r)(this,t),this.handleAuthStateChange=h.d,this.federatedSignIn=function(t){var n=t.accessToken,i=t.expiresIn;if(n){if(!u.g||"function"!==typeof u.g.federatedSignIn||"function"!==typeof u.g.currentAuthenticatedUser)throw new Error(s.N);var o=1e3*i+(new Date).getTime();window.FB.api("/me",{fields:"name,email"},(function(t){return f(e,void 0,void 0,(function(){var e,i;return l(this,(function(r){switch(r.label){case 0:return e={name:t.name,email:t.email},[4,u.g.federatedSignIn("facebook",{token:n,expires_at:o},e)];case 1:return r.sent(),[4,u.g.currentAuthenticatedUser()];case 2:return i=r.sent(),this.handleAuthStateChange(a.A.SignedIn,i),[2]}}))}))}))}},this.getLoginStatus=function(){window.FB.getLoginStatus((function(t){try{window.localStorage.setItem(s.h,JSON.stringify({provider:"facebook"}))}catch(n){m.debug("Failed to cache auth source into localStorage",n)}if("connected"===t.status)return e.federatedSignIn(t.authResponse);e.login()}))},this.login=function(){window.FB.login((function(t){t&&t.authResponse&&e.federatedSignIn(t.authResponse)}),{scope:"public_profile,email"})}}return t.prototype.signInWithFacebook=function(t){t.preventDefault(),window.FB.init({appId:this.appId,cookie:!0,xfbml:!1,version:"v5.0"}),this.getLoginStatus()},t.prototype.render=function(){var t=this;return(0,i.h)("amplify-sign-in-button",{onClick:function(e){return t.signInWithFacebook(e)},provider:"facebook"},(0,i.h)("script",{async:!0,defer:!0,src:"https://connect.facebook.net/en_US/sdk.js"}),r.o.get(c.T.SIGN_IN_WITH_FACEBOOK))},t}(),v=new o.k("amplify-google-button"),b=function(){function t(t){var e=this;(0,i.r)(this,t),this.handleAuthStateChange=h.d,this.handleError=function(t){console.error(t)},this.handleLoad=function(){window.gapi.load("auth2")},this.handleUser=function(t){return f(e,void 0,void 0,(function(){var e,n,i,o,r;return l(this,(function(c){switch(c.label){case 0:if(!u.g||"function"!==typeof u.g.federatedSignIn||"function"!==typeof u.g.currentAuthenticatedUser)throw new Error(s.N);try{window.localStorage.setItem(s.h,JSON.stringify({provider:"google"}))}catch(h){v.debug("Failed to cache auth source into localStorage",h)}return e=t.getAuthResponse(),n=e.id_token,i=e.expires_at,o=t.getBasicProfile(),[4,u.g.federatedSignIn("google",{token:n,expires_at:i},{email:o.getEmail(),name:o.getName(),picture:o.getImageUrl()})];case 1:return c.sent(),[4,u.g.currentAuthenticatedUser()];case 2:r=c.sent();try{this.handleAuthStateChange(a.A.SignedIn,r)}catch(f){this.handleError(f)}return[2]}}))}))}}return t.prototype.getAuthInstance=function(){return window.gapi&&window.gapi.auth2?window.gapi.auth2.getAuthInstance()||window.gapi.auth2.init({client_id:this.clientId,cookiepolicy:"single_host_origin",scope:"profile email openid"}):null},t.prototype.signInWithGoogle=function(t){t.preventDefault(),this.getAuthInstance().signIn().then(this.handleUser).catch(this.handleError)},t.prototype.render=function(){var t=this;return(0,i.h)("amplify-sign-in-button",{onClick:function(e){return t.signInWithGoogle(e)},provider:"google"},(0,i.h)("script",{onLoad:this.handleLoad,src:"https://apis.google.com/js/api:client.js"}),r.o.get(c.T.SIGN_IN_WITH_GOOGLE))},t}(),y=function(){function t(t){(0,i.r)(this,t),this.config={}}return t.prototype.signInWithOAuth=function(t){t.preventDefault(),u.g.federatedSignIn()},t.prototype.render=function(){var t=this;return(0,i.h)("amplify-sign-in-button",{onClick:function(e){return t.signInWithOAuth(e)},provider:"oauth"},this.config.label||r.o.get(c.T.SIGN_IN_WITH_AWS))},t}()}}]);
//# sourceMappingURL=528.faa0ff97.chunk.js.map