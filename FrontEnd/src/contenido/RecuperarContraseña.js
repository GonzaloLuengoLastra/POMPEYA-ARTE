import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Axios from "axios";

export default function RecuperarContraseña() {

  const [email, setEmail] = useState('');
  const[errorEmail,setErrorEmail]=React.useState(0)
  const [verificar, setVerificar] = useState('');
  const navigate = useNavigate();

  const cambiarEmail = (e) => {
    const valueEmail = e.target.value;
    const onliLetEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/g.test(valueEmail);

    //Incorrecto
    if(onliLetEmail === false){
      setErrorEmail(1);
    }

    //Correcto
    if(onliLetEmail === true){
      setErrorEmail(0);
    }

    setEmail(valueEmail);
  }

  const verificarCorreo = () => {
    Axios.post("http://localhost:3001/email",{
      email: email
    }).then((response) => {
      if(response.data.message) {
        setVerificar(response.data.message)
      }else{
        if(response.data[0].email){
          navigate(`/NuevaContraseña/${response.data[0].id_usuario}`)
        }else{
          navigate("/RecuperarContraseña")
        }
      }
    });
  };

    return (
      <div>   
<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n      @media only screen and (min-width: 620px) {\n  .u-row {\n    width: 600px !important;\n  }\n  .u-row .u-col {\n    vertical-align: top;\n  }\n\n  .u-row .u-col-50 {\n    width: 300px !important;\n  }\n\n  .u-row .u-col-100 {\n    width: 600px !important;\n  }\n\n}\n\n@media (max-width: 620px) {\n  .u-row-container {\n    max-width: 100% !important;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n  }\n  .u-row .u-col {\n    min-width: 320px !important;\n    max-width: 100% !important;\n    display: block !important;\n  }\n  .u-row {\n    width: 100% !important;\n  }\n  .u-col {\n    width: 100% !important;\n  }\n  .u-col > div {\n    margin: 0 auto;\n  }\n}\nbody {\n  margin: 0;\n  padding: 0;\n}\n\ntable,\ntr,\ntd {\n  vertical-align: top;\n  border-collapse: collapse;\n}\n\np {\n  margin: 0;\n}\n\n.ie-container table,\n.mso-container table {\n  table-layout: fixed;\n}\n\n* {\n  line-height: inherit;\n}\n\na[x-apple-data-detectors='true'] {\n  color: inherit !important;\n  text-decoration: none !important;\n}\n\ntable, td { color: #000000; } #u_body a { color: #161a39; text-decoration: underline; }\n    " }} />
  {/*[if !mso]><!*/}<link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" rel="stylesheet" type="text/css" />
  <table id="u_body" style={{borderCollapse: 'collapse', tableLayout: 'fixed', borderSpacing: 0, msoTableLspace: '0pt', msoTableRspace: '0pt', verticalAlign: 'top', minWidth: 320, margin: '0 auto', backgroundColor: '#f9f9f9', width: '100%'}} cellPadding={0} cellSpacing={0}>
    <tbody>
      <tr style={{verticalAlign: 'top'}}>
        <td style={{wordBreak: 'break-word', borderCollapse: 'collapse !important', verticalAlign: 'top'}}>
          {/*[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #f9f9f9;"><![endif]*/}
          <div className="u-row-container" style={{padding: 0, backgroundColor: '#f9f9f9'}}>
            <div className="u-row" style={{margin: '0 auto', minWidth: 320, maxWidth: 600, overflowWrap: 'break-word', wordWrap: 'break-word', wordBreak: 'break-word', backgroundColor: '#f9f9f9'}}>
              <div style={{borderCollapse: 'collapse', display: 'table', width: '100%', height: '100%', backgroundColor: 'transparent'}}>
                {/*[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #f9f9f9;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #f9f9f9;"><![endif]*/}
                {/*[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]*/}
                <div className="u-col u-col-100" style={{maxWidth: 320, minWidth: 600, display: 'table-cell', verticalAlign: 'top'}}>
                  <div style={{height: '100%', width: '100% !important'}}>
                    {/*[if (!mso)&(!IE)]><!*/}<div style={{height: '100%', padding: 0, borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent'}}>{/*<![endif]*/}
                      <table style={{fontFamily: '"Lato",sans-serif'}} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                        <tbody>
                          <tr>
                            <td style={{overflowWrap: 'break-word', wordBreak: 'break-word', padding: 15, fontFamily: '"Lato",sans-serif'}} align="left">
                              <table height="0px" align="center" border={0} cellPadding={0} cellSpacing={0} width="100%" style={{borderCollapse: 'collapse', tableLayout: 'fixed', borderSpacing: 0, msoTableLspace: '0pt', msoTableRspace: '0pt', verticalAlign: 'top', borderTop: '1px solid #f9f9f9', msTextSizeAdjust: '100%', WebkitTextSizeAdjust: '100%'}}>
                                <tbody>
                                  <tr style={{verticalAlign: 'top'}}>
                                    <td style={{wordBreak: 'break-word', borderCollapse: 'collapse !important', verticalAlign: 'top', fontSize: 0, lineHeight: 0, msoLineHeightRule: 'exactly', msTextSizeAdjust: '100%', WebkitTextSizeAdjust: '100%'}}>
                                      <span>&nbsp;</span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      {/*[if (!mso)&(!IE)]><!*/}</div>{/*<![endif]*/}
                  </div>
                </div>
                {/*[if (mso)|(IE)]></td><![endif]*/}
                {/*[if (mso)|(IE)]></tr></table></td></tr></table><![endif]*/}
              </div>
            </div>
          </div>
          <div className="u-row-container" style={{padding: 0, backgroundColor: 'transparent'}}>
            <div className="u-row" style={{margin: '0 auto', minWidth: 320, maxWidth: 600, overflowWrap: 'break-word', wordWrap: 'break-word', wordBreak: 'break-word', backgroundColor: '#ffffff'}}>
              <div style={{borderCollapse: 'collapse', display: 'table', width: '100%', height: '100%', backgroundColor: 'transparent'}}>
                {/*[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]*/}
                {/*[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]*/}
                <div className="u-col u-col-100" style={{maxWidth: 320, minWidth: 600, display: 'table-cell', verticalAlign: 'top'}}>
                  <div style={{height: '100%', width: '100% !important'}}>
                    {/*[if (!mso)&(!IE)]><!*/}<div style={{height: '100%', padding: 0, borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent'}}>{/*<![endif]*/}
                      <table style={{fontFamily: '"Lato",sans-serif'}} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                        <tbody>
                          <tr>
                            <td style={{overflowWrap: 'break-word', wordBreak: 'break-word', padding: '25px 10px', fontFamily: '"Lato",sans-serif'}} align="left">
                              <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                <tbody><tr>
                                  </tr>
                                </tbody></table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      {/*[if (!mso)&(!IE)]><!*/}</div>{/*<![endif]*/}
                  </div>
                </div>
                {/*[if (mso)|(IE)]></td><![endif]*/}
                {/*[if (mso)|(IE)]></tr></table></td></tr></table><![endif]*/}
              </div>
            </div>
          </div>
          <div className="u-row-container" style={{padding: 0, backgroundColor: 'transparent'}}>
            <div className="u-row" style={{margin: '0 auto', minWidth: 320, maxWidth: 600, overflowWrap: 'break-word', wordWrap: 'break-word', wordBreak: 'break-word', backgroundColor: '#161a39'}}>
              <div style={{borderCollapse: 'collapse', display: 'table', width: '100%', height: '100%', backgroundColor: 'orange'}}>
                {/*[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #161a39;"><![endif]*/}
                {/*[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]*/}
                <div className="u-col u-col-100" style={{maxWidth: 320, minWidth: 600, display: 'table-cell', verticalAlign: 'top'}}>
                  <div style={{height: '100%', width: '100% !important'}}>
                    {/*[if (!mso)&(!IE)]><!*/}<div style={{height: '100%', padding: 0, borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent'}}>{/*<![endif]*/}
                      <table style={{fontFamily: '"Lato",sans-serif'}} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                        <tbody>
                          <tr>
                            <td style={{overflowWrap: 'break-word', wordBreak: 'break-word', padding: '35px 10px 10px', fontFamily: '"Lato",sans-serif'}} align="left">
                              <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                <tbody><tr>
                                    <td style={{paddingRight: 0, paddingLeft: 0}} align="center">
                                      <img align="center" border={0} src="dist/img/SAP.png" alt="Image" title="Image" style={{outline: 'none', textDecoration: 'none', msInterpolationMode: 'bicubic', clear: 'both', display: 'inline-block !important', border: 'none', height: 'auto', float: 'none', width: '10%', maxWidth: 58}} width={58} />
                                    </td>
                                  </tr>
                                </tbody></table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table style={{fontFamily: '"Lato",sans-serif'}} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                        <tbody>
                          <tr>
                            <td style={{overflowWrap: 'break-word', wordBreak: 'break-word', padding: '0px 10px 30px', fontFamily: '"Lato",sans-serif'}} align="left">
                              <div style={{lineHeight: '140%', textAlign: 'left', wordWrap: 'break-word'}}>
                                <p style={{fontSize: 14, lineHeight: '140%', textAlign: 'center'}}><span style={{fontSize: 28, lineHeight: '39.2px', color: '#ffffff', fontFamily: 'Lato, sans-serif'}}>Restablecer contraseña</span></p>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      {/*[if (!mso)&(!IE)]><!*/}</div>{/*<![endif]*/}
                  </div>
                </div>
                {/*[if (mso)|(IE)]></td><![endif]*/}
                {/*[if (mso)|(IE)]></tr></table></td></tr></table><![endif]*/}
              </div>
            </div>
          </div>
          <div className="u-row-container" style={{padding: 0, backgroundColor: 'transparent'}}>
            <div className="u-row" style={{margin: '0 auto', minWidth: 320, maxWidth: 600, overflowWrap: 'break-word', wordWrap: 'break-word', wordBreak: 'break-word', backgroundColor: '#ffffff'}}>
              <div style={{borderCollapse: 'collapse', display: 'table', width: '100%', height: '100%', backgroundColor: 'transparent'}}>
                {/*[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]*/}
                {/*[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]*/}
                <div className="u-col u-col-100" style={{maxWidth: 320, minWidth: 600, display: 'table-cell', verticalAlign: 'top'}}>
                  <div style={{height: '100%', width: '100% !important'}}>
                    {/*[if (!mso)&(!IE)]><!*/}<div style={{height: '100%', padding: 0, borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent'}}>{/*<![endif]*/}
                      <table style={{fontFamily: '"Lato",sans-serif'}} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                        <tbody>
                          <tr>
                            <td style={{overflowWrap: 'break-word', wordBreak: 'break-word', padding: '40px 40px 30px', fontFamily: '"Lato",sans-serif'}} align="left">
                              <div style={{lineHeight: '140%', textAlign: 'left', wordWrap: 'break-word'}}>
                                <p style={{fontSize: 14, lineHeight: '140%'}}><span style={{fontSize: 14, lineHeight: '25.2px', color: '#666666'}}>Para recuperar su contraseña debe ingresar el correo electrónico válido del usuario.</span></p>
                                <p style={{fontSize: 14, lineHeight: '140%'}}> </p>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table style={{fontFamily: '"Lato",sans-serif'}} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                        <tbody>
                          <tr>
                            <td style={{overflowWrap: 'break-word', wordBreak: 'break-word', padding: '0px 40px', fontFamily: '"Lato",sans-serif'}} align="left">
                              {/*[if mso]><style>.v-button {background: transparent !important;}</style><![endif]*/}
                              <div align="center">
                                {/*[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:52px; v-text-anchor:middle; width:205px;" arcsize="2%"  stroke="f" fillcolor="#18163a"><w:anchorlock/><center style="color:#FFFFFF;font-family:'Lato',sans-serif;"><![endif]*/}  
                                <input className='tamaño' onChange={cambiarEmail}>
                                </input>
                                {
                                  (errorEmail === 1) && (
                                    <p style={{color: 'red'}}>Ejemplo: pompeya@gmail.com</p>
                                  )
                                }
                                <br></br>
                                <br></br>
                                <button disabled={errorEmail===1 }
                                
                                onClick={verificarCorreo} type='button' className="v-button" style={{boxSizing: 'border-box', display: 'inline-block', fontFamily: '"Lato",sans-serif', textDecoration: 'none', WebkitTextSizeAdjust: 'none', textAlign: 'center', color: '#FFFFFF', backgroundColor: 'grey', borderRadius: 1, WebkitBorderRadius: 1, MozBorderRadius: 1, width: 'auto', maxWidth: '100%', overflowWrap: 'break-word', wordBreak: 'break-word', wordWrap: 'break-word', msoBorderAlt: 'none'}}>
                                  <span style={{display: 'block', padding: '15px 40px', lineHeight: '120%'}}><span style={{fontSize: 18, lineHeight: '21.6px'}}>Verificar</span></span>
                                </button>
                                <Link type="button" to="/" className="v-button" style={{boxSizing: 'border-box',marginLeft: 10, display: 'inline-block', fontFamily: '"Lato",sans-serif', textDecoration: 'none', WebkitTextSizeAdjust: 'none', textAlign: 'center', color: '#FFFFFF', backgroundColor: 'grey', borderRadius: 1, WebkitBorderRadius: 1, MozBorderRadius: 1, width: 'auto', maxWidth: '100%', overflowWrap: 'break-word', wordBreak: 'break-word', wordWrap: 'break-word', msoBorderAlt: 'none'}}>
                                  <span style={{display: 'block', padding: '15px 40px', lineHeight: '120%'}}><span style={{fontSize: 18, lineHeight: '21.6px'}}>Cancelar</span></span>
                                </Link>
                                
                                {/*[if mso]></center></v:roundrect><![endif]*/}
                              </div>
                              <p style={{color: 'red', textAlign: 'center'}}>{verificar}</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                 {/*[if (!mso)&(!IE)]><!*/}</div>{/*<![endif]*/}
                  </div>
                </div>
                {/*[if (mso)|(IE)]></td><![endif]*/}
                {/*[if (mso)|(IE)]></tr></table></td></tr></table><![endif]*/}
              </div>
            </div>
          </div>
          <br></br>
          
          

          {/*[if (mso)|(IE)]></td></tr></table><![endif]*/}
        </td>
      </tr>
    </tbody>
  </table>
  {/*[if mso]></div><![endif]*/}
  {/*[if IE]></div><![endif]*/}
</div>
</div>
    );
  }
