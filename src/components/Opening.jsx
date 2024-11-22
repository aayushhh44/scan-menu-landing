import React from "react";

const Opening = ({ onClose }) => {
  return (
    <div className="fixed font-poppins inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="w-full h-full bg-white flex flex-col overflow-hidden">
        <img
          className="w-56 mx-auto"
          src="https://s3-alpha-sig.figma.com/img/9c5d/de74/f856885a8b1c3486e7a2e5d8736b9497?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mXwpvKWuJwGqUvotc17K-C7G9LWizJdgcLMJGnva6STiNEug4uTYvbVEr4s8tO7wqfBkHcF~3ATWb2VIkbwsn2-h0EiJJz66smz9MQ6ROyGKStsPzNF~-l0jojKb-9vKtoMMBwCD~Dj03hvz4VO7wnz-8nyQ1Iz9k5tfE9iFQcIg~BRtJYMS~CSAq5clpbXBPAyacqkTf~QVQ0pGYORkWFTRt2vcq~jb1mr7DWyn131nert0n8jXh4bfxWW7nRM2dhj-Oxu6H9IY4wjuYh7DCVQ~DLRc3Qm7Lj1fqQIPVv0IR2nbeByzVDiIt62~RCAJaE7Nlshn2W5w3DZ8LVwhCA__"
          alt=""
        />
        <div className="flex items-center justify-center p-6 md:p-8">
          <div className="grid grid-cols-3 gap-2 justify-center items-center">
            <div>
              <img
                className="w-44 mx-auto"
                src="https://s3-alpha-sig.figma.com/img/5fc2/6c71/1197a7fed5b1dfb5b7e9ad520f39e69c?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bR8NkfGUpLr3K2Air~8sGG1K5MQbnx7hDPyd3COsUaxMmddTuuX-FmlUm0jPY6L7hgHwgOsIwAZrxmk9EygKYQIew33yN7sr7RjmvRd8gEftrIYZSOTiIo0QnlODjU3lVfuRdrJczH5GgUu4oRh58~87PRhWdhrNbR8HsCZiQRj0VqX0-n7PVozty~hwdRYi2tRH2oqmYthCIcowkqKnYqzDOaZhJpBfLZSv3n2UmVfKwpvNyxsUze~h0mWsJEPVefrKr6~L0xtd6r4VSSy3~fMf96qEejKNEuAMPtlbmtCoY0hC5xxb1f1ZS4NxOHcjTY6ztuYJYkODOM5wZek3MQ__"
                alt=""
              />
            </div>

            <div>
              <h3 className="text-3xl md:text-3xl text-center font-semibold text-gray-900">
                We're Going Live on
              </h3>
              <h3 className="uppercase text-3xl md:text-5xl my-4 text-[#FF5500] font-bold ">November 20th</h3>
            </div>

            <div>
              <img
                className="w-44 mx-auto"
                src="/speakeright.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="flex-1 px-6 md:px-16 flex flex-col justify-center">
          <div className="space-y-6 mx-auto">
            <p className="text-lg md:text-xl leading-relaxed ">
              We are excited to announce that we'll be going live on November
              20th! 🎉
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              Thank you for your patience. Get ready for an amazing experience!
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 p-6 md:p-8">
          <button
            onClick={onClose}
            type="button"
            className="text-white bg-[#FF5500] hover:bg-[#FF5580] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-8 py-3 text-center"
          >
            Can't Wait 😭
          </button>
          <button
            onClick={onClose}
            type="button"
            className="py-3 px-8 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
          >
            Got it 👍
          </button>
        </div>
      </div>
    </div>
  );
};

export default Opening;
