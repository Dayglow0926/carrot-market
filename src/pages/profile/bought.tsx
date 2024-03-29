import Item from "@/components/item";
import Layout from "@/components/layout";
import { NextPage } from "next";

const Bought: NextPage = () => {
  return (
    <Layout title="구매내역" canGoBack>
      <div className="flex flex-col space-y-5 divide-y  pb-10">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            key={i}
            id={i}
            title="iPhone 14"
            price={99}
            hearts={1}
            comments={1}
            image=""
          />
        ))}
      </div>
    </Layout>
  );
};
export default Bought;
