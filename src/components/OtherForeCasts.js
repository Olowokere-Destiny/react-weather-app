import { next, next2, next3 } from "./utilityFunctions";
import Carousel from "./Carousel";
import DateHeader from "./DataHeader";
export default function OtherForeCasts(props) {
  const data = props.data;

  return (
    <>
      <DateHeader text={next} />
      <Carousel data={data.next1} />

      <DateHeader text={next2} />
      <Carousel data={data.next2} />

      <DateHeader text={next3} />
      <Carousel data={data.next3} />
    </>
  );
}
