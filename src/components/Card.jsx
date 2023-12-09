import elephant from "../assets/elephant.png";

const Card = () => {
  return (
    <div className="w-[450px] flex flex-col bg-green-primary card-shadow pb-4 items-center gap-[2rem] rounded-xl">
      <div className=" bg-green-800 p-4 card-radius">
        <div className="border-[12px] border-red-500 rounded-full w-[350px] h-[350px] overflow-hidden ">
          <img
            src={elephant}
            alt=""
            className="rounded-full overflow-hidden "
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 items-center">
        <span className="text-3xl font-bold">African Elephant</span>
        <span className="text-xl italic">Laxodanta Africana</span>
      </div>
    </div>
  );
};

export default Card;
