import { CustomButton } from '../../components/Common'
import Card from '../../components/Common/Card'
import DashboardLayout from '../../components/Layouts/DashboardLayout'
import { transfer, coinIcon, transactionIcon, sendIcon } from "../../assets";
import { useNavigate } from 'react-router-dom';


const TransferHistory = () => {
    const navigate = useNavigate()
  return (
    <DashboardLayout
      showHeader={true}
      headerType={"notification"}
      showSidebar={true}
    >
      <div className="px-10">
        <section className="flex w-full justify-between my-4 items-center">
          <h1 className="text-lg">Transactions</h1>
          <CustomButton
            isFilled={true}
            background="bg-primary"
            onClickFunction={() => navigate("/send")}
          >
            Send Money
          </CustomButton>
        </section>
        <section className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-3 ">
          <Card customClassName="rounded-lg shadow h-32">
            <div className="bg-neutral-3 absolute top-0 left-0 rounded-l rounded-lg h-10 w-10 flex justify-center items-center">
              <img src={transactionIcon} className="h-5 w-5" />
            </div>
            <p className="absolute right-2 bottom-20 uppercase text-sm text-neutral-6">
              Total transactions
            </p>
            <p className="absolute right-2 bottom-8 text-4xl font-bold">9000</p>
          </Card>

          <Card customClassName="rounded-lg shadow h-32">
            <div className="bg-neutral-3 absolute top-0 left-0 rounded-l rounded-lg h-10 w-10 flex justify-center items-center">
              <img src={coinIcon} className="h-5 w-5 fill-current text-green-500" alt="Transaction Icon" />
            </div>
            <p className="absolute right-2 bottom-20 uppercase text-sm text-neutral-6">
              Total transactions
            </p>
            <p className="absolute right-2 bottom-8 text-4xl font-bold">9000</p>
          </Card>
          <Card customClassName="rounded-lg shadow h-32">
            <div className="bg-neutral-3 absolute top-0 left-0 rounded-l rounded-lg h-10 w-10 flex justify-center items-center">
              <img src={transactionIcon} className="h-5 w-5" />
            </div>
            <p className="absolute right-2 bottom-20 uppercase text-sm text-neutral-6">
              Total transactions
            </p>
            <p className="absolute right-2 bottom-8 text-4xl font-bold">9000</p>
          </Card>
        </section>
        <section className="w-full flex flex-col items-center my-16">
          <Card customClassName="w-3/4 min-h-[347px]">
            <div className="w-full flex flex-col justify-center items-center gap-4">
              <img
                src={transfer}
                alt="Transfer Icon"
                className="w-16 h-16 opacity-20"
              />
              <div className="w-full flex flex-col justify-center items-center gap-4">
                <h3 className="font-bold text-lg">No transactions yet</h3>
                <p className="text-neutral-7 text-sm">
                  You have not created any invoice yet
                </p>
                <CustomButton
                  isFilled={true}
                  background="bg-black"
                  color="text-white"
                >
                  Send money
                </CustomButton>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </DashboardLayout>
  );
}

export default TransferHistory