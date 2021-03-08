/* eslint-disable max-lines-per-function */
/* eslint-disable max-lines */

'use strict';

const sgMail = require('@sendgrid/mail');

const { SENDGRID_API_KEY, SENDGRID_MAIL_TO, SENDGRID_MAIL_FROM, HTTP_CLIENT_NAME } = process.env;

async function sendEmail(id, code, email) {
  sgMail.setApiKey(SENDGRID_API_KEY);
  const msg = {
    to: email,
    from: SENDGRID_MAIL_FROM,
    subject: 'TEST',
    text: 'TEST',
    html: `<!DOCTYPE html
          PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html data-editor-version="2"
      class="sg-campaigns"
      xmlns="http://www.w3.org/1999/xhtml">

<head>
  <meta http-equiv="Content-Type"
        content="text/html; charset=utf-8">
  <meta name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible"
        content="IE=Edge">
  <!--<![endif]-->
  <!--[if (gte mso 9)|(IE)]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
  <!--[if (gte mso 9)|(IE)]>
  <style type="text/css">
    body {width: 600px;margin: 0 auto;}
    table {border-collapse: collapse;}
    table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
    img {-ms-interpolation-mode: bicubic;}
  </style>
<![endif]-->
  <style type="text/css">
    body,
    p,
    div {
      font-family: verdana, geneva, sans-serif;
      font-size: 16px;
    }

    body {
      color: #516775;
    }

    body a {
      color: #993300;
      text-decoration: none;
    }

    p {
      margin: 0;
      padding: 0;
    }

    table.wrapper {
      width: 100% !important;
      table-layout: fixed;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
      -moz-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    img.max-width {
      max-width: 100% !important;
    }

    .column.of-2 {
      width: 50%;
    }

    .column.of-3 {
      width: 33.333%;
    }

    .column.of-4 {
      width: 25%;
    }

    @media screen and (max-width:480px) {

      .preheader .rightColumnContent,
      .footer .rightColumnContent {
        text-align: left !important;
      }

      .preheader .rightColumnContent div,
      .preheader .rightColumnContent span,
      .footer .rightColumnContent div,
      .footer .rightColumnContent span {
        text-align: left !important;
      }

      .preheader .rightColumnContent,
      .preheader .leftColumnContent {
        font-size: 80% !important;
        padding: 5px 0;
      }

      table.wrapper-mobile {
        width: 100% !important;
        table-layout: fixed;
      }

      img.max-width {
        height: auto !important;
        max-width: 100% !important;
      }

      a.bulletproof-button {
        display: block !important;
        width: auto !important;
        font-size: 80%;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }

      .columns {
        width: 100% !important;
      }

      .column {
        display: block !important;
        width: 100% !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
      }

      .social-icon-column {
        display: inline-block !important;
      }
    }
  </style>
  <!--user entered Head Start-->

  <!--End Head user entered-->
</head>

<body>
  <center class="wrapper"
          data-link-color="#993300"
          data-body-style="font-size:16px; font-family:verdana,geneva,sans-serif; color:#516775; background-color:#F9F5F2;">
    <div class="webkit">
      <table cellpadding="0"
             cellspacing="0"
             border="0"
             width="100%"
             class="wrapper"
             bgcolor="#F9F5F2">
        <tr>
          <td valign="top"
              bgcolor="#F9F5F2"
              width="100%">
            <table width="100%"
                   role="content-container"
                   class="outer"
                   align="center"
                   cellpadding="0"
                   cellspacing="0"
                   border="0">
              <tr>
                <td width="100%">
                  <table width="100%"
                         cellpadding="0"
                         cellspacing="0"
                         border="0">
                    <tr>
                      <td>
                        <!--[if mso]>
    <center>
    <table><tr><td width="600">
  <![endif]-->
                        <table width="100%"
                               cellpadding="0"
                               cellspacing="0"
                               border="0"
                               style="width:100%; max-width:600px;"
                               align="center">
                          <tr>
                            <td role="modules-container"
                                style="padding:0px 0px 0px 0px; color:#516775; text-align:left;"
                                bgcolor="#F9F5F2"
                                width="100%"
                                align="left">
                              <table class="module preheader preheader-hide"
                                     role="module"
                                     data-type="preheader"
                                     border="0"
                                     cellpadding="0"
                                     cellspacing="0"
                                     width="100%"
                                     style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
                                <tr>
                                  <td role="module-content">
                                    <p>Welcome to YourPlace!</p>
                                  </td>
                                </tr>
                              </table>
                              <table class="module"
                                     role="module"
                                     data-type="spacer"
                                     border="0"
                                     cellpadding="0"
                                     cellspacing="0"
                                     width="100%"
                                     style="table-layout: fixed;"
                                     data-muid="bdzDb4B4pnnez4W7L1KpxJ">
                                <tbody>
                                  <tr>
                                    <td style="padding:0px 0px 30px 0px;"
                                        role="module-content"
                                        bgcolor="">
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="wrapper"
                                     role="module"
                                     data-type="image"
                                     border="0"
                                     cellpadding="0"
                                     cellspacing="0"
                                     width="100%"
                                     style="table-layout: fixed;"
                                     data-muid="bKZJcGfRPJb7R2nzyp6ZB6">
                                <tbody>
                                  <tr>
                                    <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;"
                                        valign="top"
                                        align="center"><a
                                         href="https://www.xtrafondos.com/wallpapers/resoluciones/19/casa-kame-de-dragon-ball_2560x1440_3963.jpg"><img
                                             class="max-width"
                                             border="0"
                                             style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:100% !important; width:100%; height:auto !important;"
                                             src="http://cdn.mcauto-images-production.sendgrid.net/e5ea3b6d3222de45/582ca81d-54e4-4dda-99a3-b11a674aa1d5/2560x1440.jpeg"
                                             alt=""
                                             width="600"
                                             data-responsive="true"
                                             data-proportionally-constrained="false"></a></td>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="module"
                                     role="module"
                                     data-type="text"
                                     border="0"
                                     cellpadding="0"
                                     cellspacing="0"
                                     width="100%"
                                     style="table-layout: fixed;"
                                     data-muid="gNWHzBzkFeWH4JDKd2Aikk"
                                     data-mc-module-version="2019-10-22">
                                <tbody>
                                  <tr>
                                    <td style="background-color:#ffffff; padding:50px 0px 10px 0px; line-height:30px; text-align:inherit;"
                                        height="100%"
                                        valign="top"
                                        bgcolor="#ffffff">
                                      <div>
                                        <div style="font-family: inherit; text-align: center"><span
                                                style="color: #516775; font-size: 28px; font-family: georgia, serif"><strong>Welcome
                                              to Yourplace!</strong></span></div>
                                        <div></div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="module"
                                     role="module"
                                     data-type="text"
                                     border="0"
                                     cellpadding="0"
                                     cellspacing="0"
                                     width="100%"
                                     style="table-layout: fixed;"
                                     data-muid="bA2FfEE6abadx6yKoMr3F9"
                                     data-mc-module-version="2019-10-22">
                                <tbody>
                                  <tr>
                                    <td style="background-color:#ffffff; padding:10px 40px 50px 40px; line-height:22px; text-align:inherit;"
                                        height="100%"
                                        valign="top"
                                        bgcolor="#ffffff">
                                      <div>
                                        <div style="font-family: inherit; text-align: center"><span
                                                style="font-family: verdana, geneva, sans-serif">Thanks for signing up
                                            to our web! We hope you will find your place.</span></div>
                                        <div></div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="module"
                                     role="module"
                                     data-type="spacer"
                                     border="0"
                                     cellpadding="0"
                                     cellspacing="0"
                                     width="100%"
                                     style="table-layout: fixed;"
                                     data-muid="dnNq8YR2nu8DNzse1aZUWt">
                                <tbody>
                                  <tr>
                                    <td style="padding:0px 0px 30px 0px;"
                                        role="module-content"
                                        bgcolor="">
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="module"
                                     role="module"
                                     data-type="divider"
                                     border="0"
                                     cellpadding="0"
                                     cellspacing="0"
                                     width="100%"
                                     style="table-layout: fixed;"
                                     data-muid="ei2zeSTvjHYmn1YhKSUfaB">
                                <tbody>
                                  <tr>
                                    <td style="padding:0px 0px 0px 0px;"
                                        role="module-content"
                                        height="100%"
                                        valign="top"
                                        bgcolor="">
                                      <table border="0"
                                             cellpadding="0"
                                             cellspacing="0"
                                             align="center"
                                             width="100%"
                                             height="10px"
                                             style="line-height:10px; font-size:10px;">
                                        <tbody>
                                          <tr>
                                            <td style="padding:0px 0px 10px 0px;"
                                                bgcolor="#ffffff"></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="module"
                                     role="module"
                                     data-type="spacer"
                                     border="0"
                                     cellpadding="0"
                                     cellspacing="0"
                                     width="100%"
                                     style="table-layout: fixed;"
                                     data-muid="vFfA6A3u2gVDK2QbpXDqPo">
                                <tbody>
                                  <tr>
                                    <td style="padding:0px 0px 30px 0px;"
                                        role="module-content"
                                        bgcolor="">
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="module"
                                     role="module"
                                     data-type="text"
                                     border="0"
                                     cellpadding="0"
                                     cellspacing="0"
                                     width="100%"
                                     style="table-layout: fixed;"
                                     data-muid="2q8x8zTfLywQieSSYmZbus"
                                     data-mc-module-version="2019-10-22">
                                <tbody>
                                  <tr>
                                    <td style="padding:18px 0px 18px 0px; line-height:30px; text-align:inherit;"
                                        height="100%"
                                        valign="top"
                                        bgcolor="">
                                      <div>
                                        <div style="font-family: inherit; text-align: center"><span
                                                style="font-size: 28px; font-family: verdana, geneva, sans-serif; color: #066ec0"><strong>Find
                                              your home</strong></span></div>
                                        <div></div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table border="0"
                                     cellpadding="0"
                                     cellspacing="0"
                                     class="module"
                                     data-role="module-button"
                                     data-type="button"
                                     role="module"
                                     style="table-layout:fixed"
                                     width="100%"
                                     data-muid="bKHWQMgPkL5opYCkxiM6aS">
                                <tbody>
                                  <tr>
                                    <td align="center"
                                        class="outer-td"
                                        style="padding:20px 0px 0px 0px;"
                                        bgcolor="">
                                      <table border="0"
                                             cellpadding="0"
                                             cellspacing="0"
                                             class="button-css__deep-table___2OZyb wrapper-mobile"
                                             style="text-align:center">
                                        <tbody>
                                          <tr>
                                            <td align="center"
                                                bgcolor="#066ec0"
                                                class="inner-td"
                                                style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;">
                                              <a style="background-color:#066ec0; border:1px solid #066EC0; border-color:#066EC0; border-radius:0px; border-width:1px; color:#ffffff; display:inline-block; font-family:verdana,geneva,sans-serif; font-size:16px; font-weight:normal; letter-spacing:1px; line-height:30px; padding:12px 20px 12px 20px; text-align:center; text-decoration:none; border-style:solid;"
                                                 href="${HTTP_CLIENT_NAME}/verify/${id}/${code}"
                                                 target="_blank">Go!</a></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="module"
                                     role="module"
                                     data-type="spacer"
                                     border="0"
                                     cellpadding="0"
                                     cellspacing="0"
                                     width="100%"
                                     style="table-layout: fixed;"
                                     data-muid="qkfYAswHNSwNpwb1p7m4gC">
                                <tbody>
                                  <tr>
                                    <td style="padding:0px 0px 30px 0px;"
                                        role="module-content"
                                        bgcolor="">
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="module"
                                     role="module"
                                     data-type="divider"
                                     border="0"
                                     cellpadding="0"
                                     cellspacing="0"
                                     width="100%"
                                     style="table-layout: fixed;"
                                     data-muid="qkG1GEG4EZSwoAzbwgoD8v">
                                <tbody>
                                  <tr>
                                    <td style="padding:0px 0px 0px 0px;"
                                        role="module-content"
                                        height="100%"
                                        valign="top"
                                        bgcolor="">
                                      <table border="0"
                                             cellpadding="0"
                                             cellspacing="0"
                                             align="center"
                                             width="100%"
                                             height="10px"
                                             style="line-height:10px; font-size:10px;">
                                        <tbody>
                                          <tr>
                                            <td style="padding:0px 0px 10px 0px;"
                                                bgcolor="#ffffff"></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="module"
                                     role="module"
                                     data-type="spacer"
                                     border="0"
                                     cellpadding="0"
                                     cellspacing="0"
                                     width="100%"
                                     style="table-layout: fixed;"
                                     data-muid="vqDDw7scxs521qMEgEyyuF">
                                <tbody>
                                  <tr>
                                    <td style="padding:0px 0px 40px 0px;"
                                        role="module-content"
                                        bgcolor="">
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <div data-role="module-unsubscribe"
                                   class="module unsubscribe-css__unsubscribe___2CDlR"
                                   role="module"
                                   data-type="unsubscribe"
                                   style="color:#444444; font-size:12px; line-height:20px; padding:16px 16px 16px 16px; text-align:center;"
                                   data-muid="GRteXBNz7UevhwJ6u6GXE">
                                <div class="Unsubscribe--addressLine"></div>
                                <p style="font-family:arial,helvetica,sans-serif; font-size:12px; line-height:20px;"><a
                                     target="_blank"
                                     class="Unsubscribe--unsubscribeLink zzzzzzz"
                                     href="{{{unsubscribe}}}"
                                     style="">Unsubscribe</a> - <a href="{{{unsubscribe_preferences}}}"
                                     target="_blank"
                                     class="Unsubscribe--unsubscribePreferences"
                                     style="">Unsubscribe Preferences</a></p>
                              </div>
                              <table class="module"
                                     role="module"
                                     data-type="spacer"
                                     border="0"
                                     cellpadding="0"
                                     cellspacing="0"
                                     width="100%"
                                     style="table-layout: fixed;"
                                     data-muid="f5F8P1n4pQyU8o7DNMMEyW">
                                <tbody>
                                  <tr>
                                    <td style="padding:0px 0px 30px 0px;"
                                        role="module-content"
                                        bgcolor="">
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]>
                                  </td>
                                </tr>
                              </table>
                            </center>
                            <![endif]-->
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </center>
</body>

</html>
`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.info('Email sent');
    })
    .catch((error) => {
      console.error(error);
    });
}

module.exports = sendEmail;
