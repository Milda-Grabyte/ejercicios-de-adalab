import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import ItemList from './ItemList';
// import HalfPage from './HalfPage.js';

const arrayOfItems = [
  {
    name: 'Cereales con chocolate',
    description: 'Cereales rellenos de chocolate',
    quantity: 2,
    category: 'Cereales',
    price: 5,
  },
  {
    name: 'Hamburguesa con queso',
    description: 'Hamburguesa rica y saludable',
    quantity: 1,
    category: 'Fast-food',
    price: 15,
  },
  {
    name: 'Agua mineral',
    description: 'Agua de un charco del Himalaya',
    quantity: 2,
    category: 'Bebida',
    price: 5,
  },
  {
    name: 'Horchata CHUFI',
    description: 'The Chufiest',
    quantity: 14,
    category: 'Bebida',
    price: 2,
  },
  {
    name: 'Snickers',
    quantity: 8,
    category: 'Bebida',
    price: 0.9,
  },
  {
    description: 'Se ha colado',
    quantity: 5,
    category: 'Bebida',
    price: 9,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <ItemList items={arrayOfItems} />
    {/* <HalfPage className="left">
      <p>
        Bacon ipsum dolor amet in duis tongue short ribs tenderloin pastrami et officia t-bone nisi laborum andouille non. Officia buffalo
        ut kevin consectetur spare ribs filet mignon bacon do brisket bresaola. Boudin nostrud bresaola anim chislic, elit venison pig
        t-bone ham hock shankle ball tip. Qui andouille ullamco fugiat, labore id meatball sunt pork flank fatback. Beef ribs spare ribs
        picanha, incididunt ipsum tail et dolor in ut quis kevin pork belly aliquip cow.
      </p>

      <p>
        Cupim tri-tip shank reprehenderit qui ipsum duis aute elit tempor short ribs id velit aliqua. Prosciutto landjaeger corned beef
        dolor adipisicing. Beef landjaeger nulla ut in turducken. Mollit turkey consectetur, exercitation strip steak shoulder in in dolore
        sed velit sunt picanha burgdoggen venison. Venison in lorem, sunt prosciutto cillum id. Tenderloin reprehenderit sint beef.
      </p>

      <p>
        Velit burgdoggen nulla, picanha turducken sint doner bacon est strip steak. Commodo buffalo incididunt, alcatra doner pork chop
        exercitation andouille pariatur. Id fatback salami nisi. Tongue t-bone pork loin excepteur dolor sunt sausage eu elit.
      </p>

      <p>
        Officia filet mignon ham irure labore turkey minim eu sunt incididunt. Incididunt shankle frankfurter aute turkey dolore sint tongue
        pancetta cupidatat. Ut mollit alcatra boudin cupim, bacon sirloin exercitation irure labore elit et corned beef in. Enim tri-tip
        jowl turducken. Ribeye fatback cillum hamburger ut porchetta bresaola frankfurter shank alcatra. Est salami bresaola alcatra
        landjaeger.
      </p>

      <p>
        Labore drumstick exercitation ribeye voluptate, pork belly rump non.Nulla hamburger frankfurter nostrud eiusmod culpa jerky irure
        picanha shankle.Elit buffalo esse corned beef capicola.Magna esse rump andouille aute pastrami.Chislic tongue eu eiusmod,
        consectetur meatloaf aliqua.
      </p>

      <p>
        Eiusmod tenderloin esse pig ut pork loin. Shoulder spare ribs shankle cillum, buffalo hamburger elit quis anim non chicken ut
        venison. Shoulder elit deserunt sausage. Doner leberkas shank, turkey short ribs dolor porchetta cow ipsum ball tip frankfurter
        bresaola eu adipisicing venison.
      </p>

      <p>
        Non labore elit, kielbasa aute frankfurter laboris voluptate.Strip steak ut aliqua, laboris bresaola ex tenderloin consequat
        tempor.In beef ribs est, jerky excepteur bacon proident consectetur elit ground round sausage porchetta.Qui commodo sirloin
        burgdoggen.Prosciutto exercitation cillum incididunt short ribs aliquip quis bacon deserunt nulla cupidatat do.Ham chuck landjaeger
        magna lorem minim.
      </p>

      <p>
        Laboris reprehenderit spare ribs, jowl flank hamburger nisi culpa duis chicken picanha pork belly deserunt do. Tri-tip chislic
        bresaola dolore boudin, proident in. Shank pancetta dolore culpa nostrud rump, boudin sirloin et pariatur ut. Bacon ham nisi, ut
        exercitation turducken magna non do nostrud cupim frankfurter culpa est. Dolore shank turducken bresaola in. Consectetur sausage
        adipisicing rump do, laborum ball tip landjaeger nostrud. Fatback cow spare ribs boudin ex, bacon doner in kevin.
      </p>

      <p>
        Turkey ut dolore voluptate eiusmod shankle chislic enim swine adipisicing tail t-bone laborum. Pig doner prosciutto capicola. Ipsum
        sed landjaeger elit id voluptate magna doner capicola pork loin fatback ad irure t-bone in. Deserunt anim andouille, aute dolor quis
        short ribs. Est et ut, non nulla jowl laboris.
      </p>

      <p>
        Buffalo commodo pig est, cupidatat tri-tip ut sunt duis bresaola pork sirloin ea adipisicing. Pariatur picanha adipisicing doner
        est. Short loin ullamco proident, ut aute ipsum nostrud kevin picanha cupidatat nulla ball tip hamburger pork. Nisi laborum aliquip
        laboris pork cupidatat kielbasa cow tenderloin beef cillum meatball prosciutto dolor. Pork belly ribeye anim et, cupim drumstick
        sunt qui kielbasa incididunt. Bacon eu sausage, meatball jerky flank reprehenderit deserunt tail corned beef cupidatat shank turkey.
      </p>

      <p>
        Burgdoggen ham incididunt pork loin, mollit in voluptate nulla ut turkey short loin ad drumstick. Cupim deserunt magna id tenderloin
        cupidatat shoulder chicken short loin bacon laborum sed in. Jowl laborum short ribs, picanha corned beef esse boudin porchetta kevin
        ad short loin ex pig velit. Occaecat t-bone incididunt ball tip eu sint boudin pork loin rump tenderloin. Occaecat hamburger ad
        incididunt pariatur consectetur turducken shoulder.
      </p>

      <p>
        Non do filet mignon ex short loin boudin commodo jowl ullamco rump t-bone biltong. Dolore officia leberkas, alcatra deserunt et
        sint. Alcatra ham hock brisket, nulla voluptate ut sausage chuck pork. Nisi short ribs sunt, ut beef sausage excepteur. Enim
        meatball id ut consequat pariatur magna pork loin picanha ham hock burgdoggen eu anim. Excepteur ribeye ut, sirloin sint meatball
        veniam kevin turkey bacon.
      </p>
    </HalfPage>
    <HalfPage className="right">
      <p>
        Pariatur sed aliqua irure shank est brisket in buffalo ham ut. Shoulder sausage quis dolore turkey sint in pork, eiusmod shank. Pork
        tempor ut, ullamco ut incididunt labore. Voluptate flank shoulder duis, ipsum pancetta incididunt minim enim leberkas aliqua chislic
        veniam spare ribs. Laborum boudin sausage incididunt buffalo. Porchetta aliquip cillum incididunt spare ribs pork loin, meatloaf
        salami laborum excepteur lorem. Pancetta ad fatback corned beef bacon kevin shankle excepteur consequat boudin ham adipisicing ham
        hock alcatra aliqua.
      </p>

      <p>
        Velit chuck nostrud meatball. Cow duis doner fatback labore in anim tri-tip cillum sausage deserunt. Proident brisket laboris
        picanha. Boudin incididunt deserunt eiusmod swine, tail ex dolore cillum. Ground round pork loin sint frankfurter esse bresaola jowl
        incididunt turducken adipisicing chuck. Incididunt eu landjaeger do, doner rump ham hock shoulder elit beef ribs tongue pork. Shank
        commodo in tenderloin laboris in dolore anim fugiat.
      </p>

      <p>
        Sausage incididunt swine ullamco ground round bresaola consectetur irure beef short loin fatback aliquip do cow. Shank aute eu ea
        biltong qui. Buffalo tail meatball fatback short ribs. Sed pork belly burgdoggen buffalo shank kevin nisi duis filet mignon pastrami
        magna. Dolore cupidatat sunt tongue prosciutto aliqua chicken sausage ut excepteur in consequat pig chuck id.
      </p>

      <p>
        Ham hock beef ribs pork veniam kevin jowl bresaola id. Short loin tempor strip steak incididunt buffalo cow occaecat eiusmod
        pancetta lorem picanha cillum. Qui aliquip ham est ad corned beef mollit shank reprehenderit boudin duis ground round prosciutto cow
        ball tip. Consectetur pork loin id, doner t-bone fugiat biltong quis adipisicing. Adipisicing fatback id elit flank magna filet
        mignon excepteur chuck pork officia prosciutto jerky reprehenderit.
      </p>

      <p>
        Pariatur sausage kevin chuck tail nostrud ea sirloin ipsum bresaola. Buffalo tenderloin cillum, pancetta turkey esse dolor meatloaf
        tempor excepteur boudin duis. Ball tip exercitation short loin sunt ham elit aliqua fugiat drumstick consequat. Pork belly duis
        incididunt chuck boudin.
      </p>

      <p>
        Est biltong landjaeger cupidatat deserunt ribeye shank consequat short ribs turducken. Biltong shoulder consequat excepteur,
        voluptate bacon tongue veniam turkey dolore brisket drumstick mollit leberkas non. Ham hock nulla jerky, labore tenderloin cupidatat
        pork belly shoulder sunt. Sausage turducken venison, chislic nulla pork short ribs shank. Id laborum ut, jerky bacon et capicola.
        Nisi spare ribs quis kevin pork belly beef ribs.
      </p>

      <p>
        Ea kielbasa cupim doner pig shankle in ham laboris landjaeger duis rump dolore. Landjaeger kielbasa exercitation in tempor dolor.
        Strip steak leberkas tail frankfurter tri-tip burgdoggen. Eu in shank jerky sirloin culpa porchetta prosciutto elit ex. Landjaeger
        venison biltong meatball id. Tenderloin consectetur ex ut tri-tip, pancetta boudin alcatra brisket short loin culpa excepteur.
        Fugiat t-bone dolore, tenderloin non nostrud do spare ribs short ribs.
      </p>

      <p>
        Sunt dolore bresaola tempor cupidatat aliquip chicken ad. Officia pork belly hamburger eiusmod kevin est picanha. Qui pork chop
        adipisicing sausage turducken sirloin. Aute ham burgdoggen, aliqua cow ipsum in picanha. Esse voluptate meatloaf ad nulla, sirloin
        strip steak in filet mignon cupim. Anim kielbasa tail est duis incididunt. Exercitation mollit pastrami filet mignon tempor, dolor
        sirloin frankfurter cow.
      </p>
    </HalfPage> */}
  </React.StrictMode>,
  document.getElementById('root')
);
