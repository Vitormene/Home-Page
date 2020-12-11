import Head from 'next/head'
import styles from '../styles/Home.module.css'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.header_topo}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className={styles.header_topo__ul}>
                <li>
                  <a href="http://gruposalus.com.br/" target="_blank" title="Conheça o nosso Grupo">Conheça o
                                nosso Grupo</a>
                </li>
                <li>
                  <a href="#" target="_self" title="Trabalhe conosco">Traballhe Conosco</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md">
            <nav className="navbar navbar-expand-lg navbar-light"><a href="/" title="Olhar Certo">
              <img className="header__brand" src="/images/logo.png"
                alt="logo Olhar Certo" title="Olhar Certo"></img></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span
                  className="navbar-toggler-icon"></span></button>
              <div className="collapse navbar-collapse justify-content-end ">
                <ul className="navbar-nav align-items-center">
                  <li className="nav-item"><a className="nav-link" href="/blog/public/" title="Home"><b>Home</b><span
                    className="sr-only"></span></a></li>
                  <li className="nav-item"><a className="nav-link" href="/#" title="Exames e tratamentos"><b>Exames e
                                        Tratamentos</b></a></li>
                  <li className="nav-item"><a className="nav-link" target="_blank"
                    href="http://www.sivoe.med.br/olharcerto" title="Resultado de Exames"><b>Resultado
                                        de Exames</b><span className="sr-only"></span></a></li>
                  <div className="header__container-buttons">
                    <li><a href="#" title="Seja um franqueado">
                      <button className={styles.header__buttonSF} type="button">Seja um franqueado</button>
                    </a></li>
                    <li><a href="#" title="Agende sua consulta">
                      <button className={styles.header__buttonAC} type="button">Agende sua consulta</button>
                    </a></li>
                  </div>
                </ul>
              </div>
            </nav>
          </div>

        </div>
      </div>
      <div className="banner__central">
        <img src=" images/borda2.png" alt=""></img>
      </div>
      <div className={styles.background_meio}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className={styles.home__menu}>
                <ul className="nav justify-content-center">
                  <li className="nav-item">
                    <a className="nav-link" target="_blank" href="#" title="A Clínica"><b>A Clínica</b>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" target="_blank" href="#" title="Equipe Médica"><b>Equipe Médica</b>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" target="_blank" title="Blog"><b>Blog</b></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.home__icone}>
            <img src="images/saude.png" alt=""></img>
          </div>

          <div className={styles.oftalmologista}>
            <h2>Quando foi a última vez que<br></br> você foi ao <b>oftalmologista?</b>
            </h2>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <img src="images/linha6.png" alt=""></img>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <iframe width="100%" height="500" src="https://www.youtube.com/embed/zMTqQumTM04"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className={styles.background_pos_meio}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className={styles.borda3}>
                <img src=" images/linhaborda3.png" alt=""></img>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className={styles.cont1}>
                <h1>Acreditamos que saúde do olhar é um direto de todos.</h1>
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <div className={styles.cont2}>
                <p>As clínicas Olhar Certo são centros oftalmológicos criados para trazer ACESSO aos mais
                modernos
                tratamentos oculares, com uma equipe de profissionais altamente qualificado.
                        </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 py-5">
              <div className={styles.maleta}>
                <img src=" images/atendimento.png" alt=""></img>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <h2>Aqui você tem atendimento com diagnóstico
                            <br></br><b>preciso e humanizado</b></h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="text-center py-5">
                <img src=" images/linhaborda5.png" alt=""></img>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <iframe width="100%" height="500" src="https://www.youtube.com/embed/haqIEGtM8KQ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.intercalado}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className={styles.post}>
                <img src=" images/imagem1.png" alt=""></img>
              </div>
              <div className="text-center py-5">
                <img src=" images/med.png" alt=""></img>
              </div>
              <div className="text-center py-1">
                <h3>Assistência ao paciente</h3>
                <p>
                  Tratamos todos os pacientes com respeito e compaixão.
                  Garantimos que todos os pacientes entendam sua condição e tratamento.
                        </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className={styles.post}>
                <img src=" images/imagem2.png" alt=""></img>
              </div>
              <div className="text-center py-5">
                <img src=" images/dna.png" alt=""></img>
              </div>
              <div className="text-center py-1">
                <h3>Equipamentos</h3>
                <p>
                  Nossas clínicas possuem o que há de mais moderno e tecnológico em oftalmologia,
                  para trazer segurança e conforto aos pacientes.
                        </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className={styles.post}>
                <img src=" images/imagem3.jpg" alt=""></img>
              </div>
              <div className="text-center py-5">
                <img src=" images/coracao.png" alt=""></img>
              </div>
              <div className="text-center py-1">
                <h3>Estrutura</h3>
                <p>
                  Clínica completa ao seu alcance. Estamos preparados para realizar todos os procedimentos
                  para o
                  diagnóstico preciso e a correção de problemas de visão.
                        </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 py-5">
              <div className={styles.maleta}>
                <img src=" images/seringa.png" alt=""></img>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <h2>Aqui você tem atendimento com diagnóstico
                        <br></br><b>preciso e humanizado</b></h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="text-center mt-3 mb-5">
                <img src=" images/linha6.png" alt=""></img>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <img src=" images/oftalmo.png" alt=""></img>
            </div>
          </div>
        </div>
      </div>


      <div className={styles.convenios}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center m-5">
                <img src=" images/hs.png" alt=""></img>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <h2>Convênios</h2>
                <h3>Cuide da sua saúde ocular e faça seus exames na Olhar Certo!</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <img src=" images/unimed.png" width="100%" alt=""></img>
            </div>

            <div className="col-md-3">
              <img src=" images/bradesco-mediservice.png" width="100%" alt=""></img>
            </div>

            <div className="col-md-3">
              <img src=" images/bradesco-saude.png" width="100%" alt=""></img>
            </div>

            <div className="col-md-3">
              <img src=" images/pm.png" width="100%" alt=""></img>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className={styles.text_convenios}>
                <p>Não encontrou sua operadora de saúde ou plano?</p>
                <p>A Olhar Certo Clínicas Oftalmológicas possui condições especiais para pagamento particular, entre
                        em contato </p>
                <p>e confira!</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="text-convenios text-center py-4">
                <p>Para informações detalhadas de unidades e exames, entre em contato conosco:</p>
                <b>São Paulo: (11) 2059-8077 / (11) 2092-2806</b>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="text-center m-5">
                <button className="convenios__buttonAC" type="button">Agende sua consulta</button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="text-center my-5">
                <img src=" images/blog.png" alt=""></img>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="text-convenios text-center">
                <b><p>Acesse nosso Blog</p></b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="post">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src=" images/post1.png" alt="" width="100%"></img>
              <div className=" post text-center bg-light">
                <p>Exame de fundo de olho: como é feito e para que serve?</p>
              </div>
            </div>
            <div className="col-md-4">
              <img src=" images/post2.png" alt="" width="100%"></img>
              <div className=" post text-center bg-light">
                <p>Qual a relação entre dores de cabeça e problemas de visão?</p>
              </div>
            </div>
            <div className="col-md-4">
              <img src=" images/post3.png" alt="" width="100%"></img>
              <div className="post text-center bg-light">
                <p>Saiba quais medicamentos podem causar problemas na retina</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-4 ">
              <div className="align-items-start">
                <img src=" images/logo.png" alt=""></img>
              </div>
              <div className="align-items-start py-3">
                <img src=" images/linhaborda5.png" alt=""></img>
              </div>
              <div className="align-items-start py-3">
                <p>Centros oftalmológicos criados para trazer ACESSO aos mais modernos tratamentos oculares com instalações modernas e tecnologicamente avançadas com uma equipe de profissionais altamente qualificada. </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="align-items-start">
                <p>SIGA-NOS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>    
 )
}
