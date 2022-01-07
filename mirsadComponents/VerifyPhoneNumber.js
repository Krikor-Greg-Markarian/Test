import React from "react";
import cn from "classnames";
import Button from "./Button";
function VerifyPhoneNumber(props) {
  return (
    <div>
      <div className={cn("bg-gray-100")}>
        <div className={cn("text-center text-2xl")}>verify your{props.verify}</div>
        <div className={cn("text-green-300 text-center text-xl font-bold")}>
          phone number{props.phoneNumber}
        </div>

        <div className={cn("relative")}>
          <div
            className={cn("bg-gray-50 container p-4 rounded-lg pt-20 pb-20")}
          >
            <div className={cn("pb-3.5")}>
              <p className={cn("text-sm text-center text-gray-500")}>
                Verify your number with the code sent{props.description}
              </p>
              <div className={cn("flex justify-center items-center pt-6")}>
                <div className={cn("flex-shrink-0 ")}>
                  <div
                    className={cn(
                      " flex justify-center shadow-2xl items-center w-12 h-12 rounded-lg bg-white"
                    )}
                  >
                    5
                  </div>
                </div>
                <div className={cn("flex-shrink-0 ml-4")}>
                  <div
                    className={cn(
                      " flex justify-center items-center w-12 h-12 rounded-lg shadow-2xl bg-white"
                    )}
                  ></div>
                </div>
                <div className={cn("flex-shrink-0 ml-4")}>
                  <div
                    className={cn(
                      " flex justify-center items-center w-12 h-12 rounded-lg shadow-2xl bg-white"
                    )}
                  ></div>
                </div>
                <div className={cn("flex-shrink-0 ml-4")}>
                  <div
                    className={cn(
                      " flex justify-center items-center w-12 h-12 rounded-lg shadow-2xl bg-white"
                    )}
                  ></div>
                </div>
              </div>
              <p className={cn("text-sm text-center text-gray-500 pt-6")}>
                i did not receive a code{props.didNotReceive}
              </p>
              <p
                className={cn(
                  "underline text-center text-black cursor-pointer "
                )}
              >
                resend{props.resend}
              </p>
            </div>
          </div>
          <div className={cn("flex justify-center items-center")}>
            <div className={cn("absolute -bottom-4")}>
              <Button buttonName = {props.buttonName} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyPhoneNumber;
