import EmptyCartComponent from "@/components/sections/EmptyCartComponent";

const CartPage = () => {
  return (
    <div className="container mx-auto flex flex-col h-auto w-full">
      <div className="mt-[120px] lg:mt-[100px] px-4 lg:px-0">
        <p className="text-[24px] lg:text-[28px] text-blue-600 font-semibold">
          my cart
        </p>
        <div className="mt-4 border-b-[1px] border-gray-100"></div>
      </div>

      {/* Empty Cart Section*/}
      <EmptyCartComponent />
    </div>
  );
};

export default CartPage;
