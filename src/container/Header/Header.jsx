import React, { useEffect } from 'react';
import './Header.css';
import images from '../../constants/images';

const Header = () => {
  useEffect(() => {
    const handleScrollClick = () => {
      window.scrollBy(0, 600);
    };

    const scrollElement = document.getElementById("scroll");
    if (scrollElement) {
      scrollElement.addEventListener("click", handleScrollClick);
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("click", handleScrollClick);
      }
    };
  }, []);
  return (
    <>
      <div className='app__Header'>
        <div className='app__Header-image'>
          <div className='app__Header-overlay'>
            <hr className='Header__hr' />
            <p className='app__Heading-Text' id='app__Paragraph'>Hi, New Friends!</p>
            <h1 className='app__Heading-Text' id='app__Title'>Welcome To BytZen SeaFood</h1>
            <div className="app__Header-buttons">
              <button>
                <span>Book Table</span>
                <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="37" cy="37" r="35.5" stroke="black" stroke-width="3"></circle>
                  <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                </svg>
              </button>
              <button id='button-2'>
                <span>Menu</span>
                <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="37" cy="37" r="35.5" stroke="black" stroke-width="3"></circle>
                  <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                </svg>
              </button>

            </div>
            <div class="center">
              <svg width="30" height="100" viewBox="0 0 50 100" id="scroll">
                <rect x="10" y="5" rx="10" ry="10" width="30" height="50" stroke="var(--color-white)" fill="transparent" stroke-width="3"></rect>
                <circle cx="25" cy="25" r="6" fill="var(--color-white)" id="circle--shape"></circle>
              </svg>
            </div>


          </div>


        </div>
      </div>

      <h3>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ex aliquam in id error, incidunt ea expedita, quam sit explicabo voluptates eveniet, odio eligendi cumque numquam nulla est ullam quo? Quaerat voluptas nihil quia cumque, perspiciatis, omnis maxime qui perferendis rerum corporis inventore mollitia dolorum modi commodi sed expedita iste alias corrupti veritatis molestiae deserunt nam neque velit! Aut inventore quas, necessitatibus ad in est provident optio ullam quisquam assumenda, atque cum ex maiores similique rem reiciendis deserunt repudiandae quidem pariatur unde dolor explicabo. Officiis quisquam optio nihil ducimus vero quis qui distinctio, blanditiis, ratione sapiente labore eum modi hic iusto enim atque minus ex rerum recusandae fuga neque quo! Est accusantium, totam repudiandae fugiat aut expedita inventore, velit animi magni ab a eveniet perferendis soluta labore, mollitia molestiae nulla. Quae veritatis dolore blanditiis, odio exercitationem omnis! Ea nihil fugit adipisci, ad commodi cupiditate totam nostrum quo sint debitis tenetur, alias non nobis rem, voluptates id magni ut tempore delectus quas quibusdam odio atque. Dolores corporis praesentium ratione eos? Possimus, ut quae! Asperiores, dolorum unde inventore libero dolor cumque exercitationem. Magni maiores illum, alias temporibus, iste inventore nemo et nobis soluta ipsam nihil esse quos provident odit voluptatum a libero veniam nulla quibusdam. Tempore, totam. Qui voluptatibus dolor et, dignissimos nam expedita id necessitatibus provident quas ex perspiciatis ipsum, iste, veniam officia magnam fuga? Sint voluptatem, cupiditate provident unde illum excepturi id cumque fuga laborum inventore esse est! Quis voluptatum sint obcaecati impedit autem quisquam officia, perferendis veritatis necessitatibus, reiciendis consequuntur dolores recusandae dolorem tenetur rem, expedita harum. Itaque, assumenda excepturi veniam dolor alias aliquid praesentium corporis quaerat eos animi enim blanditiis temporibus cum ut labore quidem dolores laudantium facere error reprehenderit, dolorem doloremque harum? Consectetur omnis porro totam possimus nisi ratione officia sint earum laborum est neque ex, in atque dolore cumque accusantium. Minus consequuntur non sed corporis unde exercitationem accusantium a mollitia eos quia ipsam quasi voluptas deleniti expedita quis, consequatur ad. Dolorem, ducimus quisquam reprehenderit architecto itaque dicta veniam molestias minus recusandae doloremque cupiditate vitae voluptate facere dignissimos amet consectetur. Incidunt dolore repellendus esse minima! Numquam corrupti consequuntur fuga modi magnam. Repellendus error doloremque optio expedita atque pariatur, ratione omnis harum excepturi. In magni laborum voluptas harum ipsum repellendus, repellat facilis voluptate blanditiis quidem quas a fuga ducimus possimus totam dolorem tempore modi quos dolorum molestias nobis, facere, rem vel! Rerum veniam delectus vel nihil, harum libero eveniet dolore repudiandae, deleniti labore similique assumenda nostrum molestiae laboriosam tempora aliquid maiores corporis amet cumque. Porro ipsum unde nostrum, repellendus odio aliquam tempore et in exercitationem consequatur voluptas beatae sint magni repudiandae, doloribus alias suscipit nesciunt vero perferendis, dicta ullam sapiente? Accusamus consectetur inventore recusandae non vero odit libero, eligendi exercitationem a obcaecati reiciendis iste, dolore earum dolor assumenda. Nobis asperiores minima, explicabo possimus ratione dignissimos ex natus aut quos, distinctio expedita, cumque inventore voluptate eveniet accusamus. Saepe id amet hic aut a debitis sint placeat alias. Sunt aut, voluptate quaerat, modi saepe obcaecati nisi facere ducimus ea necessitatibus odio in impedit? Consequatur est rerum, illo repellendus quas, quia veritatis porro culpa voluptatem maxime ad nobis nemo minima quam neque illum mollitia. Hic quo vitae aspernatur perferendis dolorum dicta pariatur dolorem quaerat architecto. Architecto quibusdam dolores eum nobis necessitatibus mollitia corrupti, at, alias ea rem aperiam culpa voluptatum reprehenderit illum quod perferendis magnam libero accusantium ducimus doloribus quisquam laboriosam minus laborum iste? Aspernatur amet blanditiis ratione ducimus fugit fuga, aliquam libero quisquam harum mollitia rem dicta esse vitae eum quos quas quis fugiat eaque recusandae minus laboriosam obcaecati at ex. Optio quis libero maxime cupiditate enim consequuntur laborum, ea accusamus debitis adipisci officia illum, quod voluptatem tempore deserunt velit? Assumenda debitis quibusdam, accusantium consequatur alias optio aut minima possimus rem unde adipisci tempore? Provident laborum esse repellendus fuga minus eos consequuntur exercitationem adipisci culpa saepe similique repudiandae assumenda, nulla odio quae! Consectetur corrupti suscipit repudiandae obcaecati mollitia error necessitatibus rem fugiat sit aut excepturi officia, reprehenderit aliquid quibusdam beatae impedit doloribus eaque. Mollitia accusantium sunt magnam quisquam saepe perferendis, eum non suscipit nihil consequatur in blanditiis beatae unde rerum laboriosam aspernatur quae vero perspiciatis praesentium laborum soluta repudiandae odio. Odit quidem minus hic impedit expedita facilis voluptatibus possimus fugit fuga ad temporibus deleniti, doloribus eius voluptates tenetur, delectus omnis? Qui, sit omnis! Quasi non deserunt quibusdam error eveniet deleniti repellat perspiciatis unde cumque harum aliquam cum qui distinctio, nobis delectus eaque odio et rerum quaerat consectetur amet similique, aperiam hic! Dolore possimus eius ipsam dignissimos voluptate quo inventore maiores, eum culpa autem earum ea, beatae rerum similique molestiae nostrum quae architecto! Provident cupiditate debitis ex aspernatur ipsum? Impedit velit doloribus non accusantium fuga dolorem molestias vero itaque porro suscipit illum, tenetur voluptas a adipisci sed dicta? Nam provident omnis repellat ut saepe porro, deserunt deleniti molestias alias explicabo? Magni ducimus animi voluptatibus saepe eius incidunt, fuga excepturi amet eligendi repellat rem doloremque quos dignissimos cum, asperiores laborum? Sint maiores aliquid mollitia doloribus excepturi, rem id nam nulla ut reiciendis quaerat reprehenderit iste doloremque quis quasi! onsectetur adipisicing elit. Animi laboriosam beatae veniam, voluptates, dolor quidem dolorem ipsam hic minima ipsa fuga optio totam mollitia cumque possimus nisi ex adipisci facilis id, eligendi atque repellendus praesentium. Similique recusandae ducimus quidem. Corrupti, ut quod quia doloribus repudiandae hic ipsum error voluptates officiis fugit sint dolores illo. Quasi ipsum nisi numquam eos vero amet sunt omnis odio quo, qui dolores iste quos necessitatibus earum optio repellendus impedit voluptatum? Reprehenderit quaerat ratione consequatur nobis. Veritatis quas expedita quidem aliquam minima? Aperiam, magni velit dolore hic, totam, distinctio non dignissimos repellat aspernatur quidem placeat fugiat nihil. Architecto magnam, nobis harum fuga quis possimus similique natus quasi, ut omnis tempora dignissimos nisi excepturi aliquid exercitationem velit blanditiis dolores quibusdam porro at voluptatum! Maiores natus possimus, dolores illo iusto cumque dolor?</h3>
    </>

  );
}

export default Header;
