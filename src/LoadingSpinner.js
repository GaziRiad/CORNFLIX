import { TailSpin } from "react-loader-spinner";

export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center">
      <TailSpin
        height="120"
        width="120"
        color="#000411"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
