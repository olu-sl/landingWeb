import { memo } from "react";
import Image from "next/image";
import Check from "components/Check";
//how osl works
const Body1 = () => {
  const ListEle = ({ text }: { text: string }) => (
    <li className="listElement">
      <Check size={22} />
      <p>{text}</p>
    </li>
  );
  return (
    <div className="body1">
      <div className="mainInfo">
        <h2>How OSL works</h2>
        <h4>
          OSL is the most convenient way to store your stuff.
          <br />
          {` We pick up at home and carry for you if needed, whether it's one box or all
          kinds of weird stuff.`}
        </h4>

        <ul className="processLists">
          <ListEle text={`Order in your account`} />
          <ListEle text={`Drop package at our shipping center`} />
          <ListEle text={`Confirm order and make your payment`} />
          <ListEle text={`Your package will be delivered in 5-10 working days`} />
        </ul>
      </div>

      <div className="imageCont">
        <Image src="/assets/HowOslWorks.png" alt="howOslWorksDiagram" width={500} height={500} className="image" />
      </div>
    </div>
  );
};

export default memo(Body1);
