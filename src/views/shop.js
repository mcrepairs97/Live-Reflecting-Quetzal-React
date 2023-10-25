import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './shop.css'

const Shop = (props) => {
  return (
    <div className="shop-container">
      <Helmet>
        <title>Shop - B&M Digital Surveillance</title>
        <meta
          name="description"
          content="Looking for great expertise in CCTV, give us a call or take a look at our site and check out who we and what we do!"
        />
        <meta
          property="og:title"
          content="Shop - B&amp;M Digital Surveillance"
        />
        <meta
          property="og:description"
          content="Looking for great expertise in CCTV, give us a call or take a look at our site and check out who we and what we do!"
        />
      </Helmet>
      <header data-thq="thq-navbar" className="shop-navbar-interactive">
        <img
          alt="image"
          src="/external/favicon1-200h.png"
          className="shop-image"
        />
        <div data-thq="thq-navbar-nav" className="shop-desktop-menu">
          <nav className="shop-links">
            <Link to="/" className="shop-navlink">
              HOME
            </Link>
            <Link to="/shop" className="shop-navlink1">
              SHOP
            </Link>
            <Link to="/contact" className="shop-navlink2">
              CONTACT
            </Link>
            <Link to="/about-us" className="shop-navlink3">
              ABOUT US
            </Link>
          </nav>
          <div className="shop-icon-group">
            <a
              href="https://www.instagram.com/bmdigitalsurveillance"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg viewBox="0 0 877.7142857142857 1024" className="shop-icon">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100075744765555"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg viewBox="0 0 602.2582857142856 1024" className="shop-icon02">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </a>
            <a href="tel:+27630241370">
              <svg viewBox="0 0 877.7142857142857 1024" className="shop-icon04">
                <path d="M562.857 556.571c9.714 0 102.857 48.571 106.857 55.429 1.143 2.857 1.143 6.286 1.143 8.571 0 14.286-4.571 30.286-9.714 43.429-13.143 32-66.286 52.571-98.857 52.571-27.429 0-84-24-108.571-35.429-81.714-37.143-132.571-100.571-181.714-173.143-21.714-32-41.143-71.429-40.571-110.857v-4.571c1.143-37.714 14.857-64.571 42.286-90.286 8.571-8 17.714-12.571 29.714-12.571 6.857 0 13.714 1.714 21.143 1.714 15.429 0 18.286 4.571 24 19.429 4 9.714 33.143 87.429 33.143 93.143 0 21.714-39.429 46.286-39.429 59.429 0 2.857 1.143 5.714 2.857 8.571 12.571 26.857 36.571 57.714 58.286 78.286 26.286 25.143 54.286 41.714 86.286 57.714 4 2.286 8 4 12.571 4 17.143 0 45.714-55.429 60.571-55.429zM446.857 859.429c197.714 0 358.857-161.143 358.857-358.857s-161.143-358.857-358.857-358.857-358.857 161.143-358.857 358.857c0 75.429 24 149.143 68.571 210.286l-45.143 133.143 138.286-44c58.286 38.286 127.429 59.429 197.143 59.429zM446.857 69.714c237.714 0 430.857 193.143 430.857 430.857s-193.143 430.857-430.857 430.857c-72.571 0-144.571-18.286-208.571-53.714l-238.286 76.571 77.714-231.429c-40.571-66.857-61.714-144-61.714-222.286 0-237.714 193.143-430.857 430.857-430.857z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="shop-burger-menu">
          <svg viewBox="0 0 1024 1024" className="shop-icon06">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="shop-mobile-menu">
          <div className="shop-nav">
            <div className="shop-top">
              <img
                alt="image"
                src="/external/favicon1-200h.png"
                className="shop-image1"
              />
              <div data-thq="thq-close-menu" className="shop-close-menu">
                <svg viewBox="0 0 1024 1024" className="shop-icon08">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="shop-links1">
              <Link to="/" className="shop-navlink4">
                HOME
              </Link>
              <Link to="/shop" className="shop-navlink5">
                SHOP
              </Link>
              <Link to="/contact" className="shop-navlink6">
                CONTACT
              </Link>
              <Link to="/about-us" className="shop-navlink7">
                ABOUT US
              </Link>
            </nav>
          </div>
          <div className="shop-icon-group1">
            <a href="tel:+27630241370">
              <svg viewBox="0 0 877.7142857142857 1024" className="shop-icon10">
                <path d="M562.857 556.571c9.714 0 102.857 48.571 106.857 55.429 1.143 2.857 1.143 6.286 1.143 8.571 0 14.286-4.571 30.286-9.714 43.429-13.143 32-66.286 52.571-98.857 52.571-27.429 0-84-24-108.571-35.429-81.714-37.143-132.571-100.571-181.714-173.143-21.714-32-41.143-71.429-40.571-110.857v-4.571c1.143-37.714 14.857-64.571 42.286-90.286 8.571-8 17.714-12.571 29.714-12.571 6.857 0 13.714 1.714 21.143 1.714 15.429 0 18.286 4.571 24 19.429 4 9.714 33.143 87.429 33.143 93.143 0 21.714-39.429 46.286-39.429 59.429 0 2.857 1.143 5.714 2.857 8.571 12.571 26.857 36.571 57.714 58.286 78.286 26.286 25.143 54.286 41.714 86.286 57.714 4 2.286 8 4 12.571 4 17.143 0 45.714-55.429 60.571-55.429zM446.857 859.429c197.714 0 358.857-161.143 358.857-358.857s-161.143-358.857-358.857-358.857-358.857 161.143-358.857 358.857c0 75.429 24 149.143 68.571 210.286l-45.143 133.143 138.286-44c58.286 38.286 127.429 59.429 197.143 59.429zM446.857 69.714c237.714 0 430.857 193.143 430.857 430.857s-193.143 430.857-430.857 430.857c-72.571 0-144.571-18.286-208.571-53.714l-238.286 76.571 77.714-231.429c-40.571-66.857-61.714-144-61.714-222.286 0-237.714 193.143-430.857 430.857-430.857z"></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/bmdigitalsurveillance"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg viewBox="0 0 877.7142857142857 1024" className="shop-icon12">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100075744765555"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg viewBox="0 0 602.2582857142856 1024" className="shop-icon14">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </a>
          </div>
        </div>
      </header>
      <div className="shop-banner">
        <h1 className="shop-text">
          <span>Explore what we have in stock</span>
          <br></br>
          <span>while you find what you need</span>
        </h1>
      </div>
      <div className="shop-separator"></div>
      <div className="shop-container01">
        <h1 className="shop-text004">
          PLEASE  NOTE THAT THIS IS NOT AN ONLINE STORE TO PURCHASE FROM
          ALTHOUGH YOU CAN SEARCH FOR WHAT YOU NEED AND CALL IN TO PLACE AN
          ORDER WITH US.
        </h1>
      </div>
      <div className="shop-separator01"></div>
      <div className="shop-container02">
        <h1 className="shop-text005">FULL SYSTEMS</h1>
      </div>
      <div className="shop-container03">
        <div className="shop-container04">
          <img
            alt="image"
            src="/external/47741508-2-pdpxl-200h.jpg"
            className="shop-image2"
          />
          <span className="shop-text006">
            <span>
              AHD CCTV
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>4Ch Kit</span>
            <br></br>
            <span className="shop-text011">R1850</span>
            <br></br>
          </span>
        </div>
        <div className="shop-container05">
          <img
            alt="image"
            src="/external/47741514-1-zoom-200w.jpg"
            className="shop-image3"
          />
          <span className="shop-text013">
            <span className="shop-text014">
              AHD CCTV
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="shop-text015"></br>
            <span className="shop-text016">8Ch Kit</span>
            <br></br>
            <span className="shop-text018">R2990</span>
            <br></br>
          </span>
        </div>
      </div>
      <div className="shop-container06">
        <div className="shop-separator02"></div>
      </div>
      <div className="shop-container07">
        <h1 className="shop-text020">STORAGE DRIVES</h1>
      </div>
      <div className="shop-container08">
        <div className="shop-container09">
          <img
            alt="image"
            src="/external/used-500gb-desktop-hdd-200h.jpg"
            className="shop-image4"
          />
          <span className="shop-text021">
            <span className="shop-text022">
              WD 500GB
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="shop-text023"></br>
            <span className="shop-text024">HDD</span>
            <br className="shop-text025"></br>
            <span className="shop-text026">R650</span>
            <br></br>
          </span>
        </div>
        <div className="shop-container10">
          <div className="shop-container11">
            <span className="shop-text028">NO STOCK</span>
          </div>
          <span className="shop-text029">
            <span className="shop-text030">
              SEAGATE 1TB
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="shop-text031"></br>
            <span className="shop-text032">HDD</span>
            <br className="shop-text033"></br>
            <span className="shop-text034">R1170</span>
            <br></br>
          </span>
        </div>
      </div>
      <div className="shop-container12">
        <div className="shop-separator03"></div>
      </div>
      <div className="shop-container13">
        <div className="shop-container14">
          <div className="shop-container15">
            <span className="shop-text036">NO STOCK</span>
          </div>
          <span className="shop-text037">
            <span className="shop-text038">
              SEAGATE
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="shop-text039"></br>
            <span className="shop-text040">
              2TB
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="shop-text041"></br>
            <span className="shop-text042">HDD</span>
            <br className="shop-text043"></br>
            <span className="shop-text044">R1690</span>
            <br></br>
          </span>
        </div>
        <div className="shop-container16">
          <div className="shop-container17">
            <span className="shop-text046">NO STOCK</span>
          </div>
          <span className="shop-text047">
            <span className="shop-text048">
              WD
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="shop-text049"></br>
            <span className="shop-text050">4TB</span>
            <br className="shop-text051"></br>
            <span className="shop-text052">HDD</span>
            <br className="shop-text053"></br>
            <span className="shop-text054">R3248</span>
            <br></br>
          </span>
        </div>
      </div>
      <div className="shop-separator04"></div>
      <div className="shop-container18">
        <h1 className="shop-text056">DVR&apos;S</h1>
      </div>
      <div className="shop-container19">
        <div className="shop-container20">
          <img
            alt="image"
            src="/8%20channel%20dvr%20-%208ch%20dvr%20h264%20-network%20-%20record%20-%20playback%20motion%20detect-%20remote%20access-pdpxl-200h.jpg"
            className="shop-image5"
          />
          <span className="shop-text057">
            <span className="shop-text058">
              8CH h.264
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="shop-text059"></br>
            <span className="shop-text060">DVR</span>
            <br className="shop-text061"></br>
            <span className="shop-text062">R1247</span>
            <br></br>
          </span>
        </div>
        <div className="shop-container21">
          <img
            alt="image"
            src="/57542075-1-zoom-200h.jpeg"
            className="shop-image6"
          />
          <span className="shop-text064">
            <span className="shop-text065">HILOOK 16ch</span>
            <br className="shop-text066"></br>
            <span className="shop-text067">HD DVR</span>
            <br className="shop-text068"></br>
            <span className="shop-text069">R2498</span>
          </span>
        </div>
      </div>
      <div className="shop-separator05"></div>
      <div className="shop-container22">
        <h1 className="shop-text070">POWER SUPPLIES</h1>
      </div>
      <div className="shop-container23">
        <div className="shop-container24">
          <div className="shop-container25">
            <span className="shop-text071">NO STOCK</span>
          </div>
          <span className="shop-text072">
            <span className="shop-text073">12v 10A 9CH</span>
            <br className="shop-text074"></br>
            <span className="shop-text075">POWER SUPPLY</span>
            <br className="shop-text076"></br>
            <span className="shop-text077">R550</span>
            <br></br>
          </span>
        </div>
        <div className="shop-container26">
          <div className="shop-container27">
            <span className="shop-text079">NO STOCK</span>
          </div>
          <span className="shop-text080">
            <span className="shop-text081">12V 30A 18CH</span>
            <br className="shop-text082"></br>
            <span className="shop-text083">POWER SUPPLY</span>
            <br className="shop-text084"></br>
            <span className="shop-text085">R850</span>
            <br></br>
          </span>
        </div>
      </div>
      <div className="shop-separator06"></div>
      <div className="shop-container28">
        <h1 className="shop-text087">UPS</h1>
      </div>
      <div className="shop-container29">
        <div className="shop-container30">
          <div className="shop-container31">
            <span className="shop-text088">NO STOCK</span>
          </div>
          <span className="shop-text089">
            <span className="shop-text090">MECER</span>
            <br className="shop-text091"></br>
            <span className="shop-text092">
              1000 VA
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="shop-text093"></br>
            <span className="shop-text094">UPS</span>
            <br className="shop-text095"></br>
            <span className="shop-text096">R2468</span>
            <br></br>
          </span>
        </div>
        <div className="shop-container32">
          <div className="shop-container33">
            <span className="shop-text098">NO STOCK</span>
          </div>
          <span className="shop-text099">
            <span className="shop-text100">MECER</span>
            <br className="shop-text101"></br>
            <span className="shop-text102">2000 VA</span>
            <br className="shop-text103"></br>
            <span className="shop-text104">UPS</span>
            <br className="shop-text105"></br>
            <span className="shop-text106">R4329</span>
            <br></br>
          </span>
        </div>
      </div>
      <div className="shop-separator07"></div>
      <div className="shop-container34">
        <h1 className="shop-text108">MONITORS</h1>
      </div>
      <div className="shop-container35">
        <div className="shop-container36">
          <div className="shop-container37">
            <span className="shop-text109">NO STOCK</span>
          </div>
          <span className="shop-text110">
            <span className="shop-text111">19&quot;SCREEN</span>
            <br className="shop-text112"></br>
            <span className="shop-text113">R1147</span>
            <br></br>
          </span>
        </div>
        <div className="shop-container38">
          <div className="shop-container39">
            <span className="shop-text115">NO STOCK</span>
          </div>
          <span className="shop-text116">
            <span className="shop-text117">
              20&quot;SCREEN
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="shop-text118"></br>
            <span className="shop-text119">R1485</span>
            <br></br>
          </span>
        </div>
      </div>
      <div className="shop-container40">
        <div className="shop-container41">
          <div className="shop-container42">
            <span className="shop-text121">NO STOCK</span>
          </div>
          <span className="shop-text122">
            <span className="shop-text123">22&quot;SCREEN</span>
            <br className="shop-text124"></br>
            <span className="shop-text125">R1890</span>
          </span>
        </div>
      </div>
      <div className="shop-separator08"></div>
      <div className="shop-container43">
        <h1 className="shop-text126">
          PLEASE  NOTE THAT THIS IS NOT AN ONLINE STORE TO PURCHASE FROM
          ALTHOUGH YOU CAN SEARCH FOR WHAT YOU NEED AND CALL IN TO PLACE AN
          ORDER WITH US.
        </h1>
      </div>
      <div className="shop-separator09"></div>
      <footer className="shop-footer">
        <div className="shop-container44">
          <img src="/external/untitled-1-400w.png" className="shop-image7" />
          <div className="shop-container45">
            <div className="shop-container46">
              <a
                href="https://www.facebook.com/profile.php?id=100075744765555"
                target="_blank"
                rel="noreferrer noopener"
                className="shop-link6"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="shop-icon16"
                >
                  <path d="M829.143 73.143c26.857 0 48.571 21.714 48.571 48.571v780.571c0 26.857-21.714 48.571-48.571 48.571h-223.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-420c-26.857 0-48.571-21.714-48.571-48.571v-780.571c0-26.857 21.714-48.571 48.571-48.571h780.571z"></path>
                </svg>
              </a>
            </div>
            <div className="shop-container47">
              <a href="tel:+27630241370" className="shop-link7">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="shop-icon18"
                >
                  <path d="M562.857 556.571c9.714 0 102.857 48.571 106.857 55.429 1.143 2.857 1.143 6.286 1.143 8.571 0 14.286-4.571 30.286-9.714 43.429-13.143 32-66.286 52.571-98.857 52.571-27.429 0-84-24-108.571-35.429-81.714-37.143-132.571-100.571-181.714-173.143-21.714-32-41.143-71.429-40.571-110.857v-4.571c1.143-37.714 14.857-64.571 42.286-90.286 8.571-8 17.714-12.571 29.714-12.571 6.857 0 13.714 1.714 21.143 1.714 15.429 0 18.286 4.571 24 19.429 4 9.714 33.143 87.429 33.143 93.143 0 21.714-39.429 46.286-39.429 59.429 0 2.857 1.143 5.714 2.857 8.571 12.571 26.857 36.571 57.714 58.286 78.286 26.286 25.143 54.286 41.714 86.286 57.714 4 2.286 8 4 12.571 4 17.143 0 45.714-55.429 60.571-55.429zM446.857 859.429c197.714 0 358.857-161.143 358.857-358.857s-161.143-358.857-358.857-358.857-358.857 161.143-358.857 358.857c0 75.429 24 149.143 68.571 210.286l-45.143 133.143 138.286-44c58.286 38.286 127.429 59.429 197.143 59.429zM446.857 69.714c237.714 0 430.857 193.143 430.857 430.857s-193.143 430.857-430.857 430.857c-72.571 0-144.571-18.286-208.571-53.714l-238.286 76.571 77.714-231.429c-40.571-66.857-61.714-144-61.714-222.286 0-237.714 193.143-430.857 430.857-430.857z"></path>
                </svg>
              </a>
            </div>
            <div className="shop-container48">
              <a
                href="https://www.instagram.com/bmdigitalsurveillance"
                target="_blank"
                rel="noreferrer noopener"
                className="shop-link8"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="shop-icon20"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="shop-separator10"></div>
        <div className="shop-container49">
          <span className="shop-text127">
            Copyright © 2023. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Shop
