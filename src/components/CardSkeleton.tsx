import Skeleton from "react-loading-skeleton";

export const CardSkeleton = ({ cards }: { cards: number }) => {
  return (
    <>
      {Array.from({ length: cards }, (_, index) => (
        <div className="user-card" key={index}>
          <Skeleton circle width={50} height={50} />
          <div className="info">
            <h3>
              <Skeleton />
            </h3>
            {Array.from({ length: 3 }, (_, index) => (
              <p key={index}>
                <Skeleton />
              </p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
