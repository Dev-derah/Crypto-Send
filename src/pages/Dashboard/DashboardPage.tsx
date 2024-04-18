import { CustomButton } from "../../components/Common";
import VerificationBanner from "../../components/Common/Banner";
import AssetFlowGraph from "../../components/Dashboard/Graphs/AssetFlowGraph";
import SummaryStatistics from "../../components/Dashboard/Statistics/SummaryStatistics";
import DashboardLayout from "../../components/Layouts/DashboardLayout";
import { graphData } from "../../components/Dashboard/Graphs/Data";
import { statistics } from "../../components/Dashboard/Statistics/dashboardData";
import TransactionHistoryTable from "../../components/Dashboard/Tables/TransactionHistoryTable";
import { transactionsData } from "../../components/Dashboard/Tables/transactionsData";
import React from "react";
import Username from "../../components/Common/Texts/Username";
const DashboardPage: React.FC = () => {
  return (
    <DashboardLayout
      showHeader={true}
      showSidebar={true}
      headerType="notification"
    >
      <VerificationBanner
        type="error"
        textContent="Verify your Account by doing your KYC"
      />
      <main className="px-10 md:py-10 lg:px-20">
        <section className="mt-section-padding flex justify-between items-center lg:my-0">
          <div className="grid grid-rows-2">
            <p className="text-lg">Welcome Back,</p>
            <Username username="johndoe" size="large" />
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <CustomButton className="w-40 ">Generate Invoice</CustomButton>
            <CustomButton
              isFilled={true}
              background="bg-primary"
              className="w-40"
            >
              Send Money
            </CustomButton>
          </div>
        </section>
        <section className="pt-section-padding">
          <SummaryStatistics statistics={statistics} />
        </section>
        <section className="pt-section-padding">
          <p className=" text-xs">Asset Flow</p>
          <div className="flex justify-between items-center">
            <p className=" text-lg flex items-center font-bold md:text-[34px]">
              $ 15,000
              <span className="text-sm text-success bg-success-100 mx-1 px-2 py-1 rounded-full">
                +2.4%
              </span>
            </p>
            <div className="gap-2 flex">
              <CustomButton>Select range</CustomButton>
            </div>
          </div>
          <AssetFlowGraph graphData={graphData} />
        </section>
        <section className="pt-section-padding">
          <div className="flex justify-between">
            <p>Transaction History</p>
            <a className="underline" href="/transfer-history">
              See all
            </a>
          </div>
        </section>
        <section>
          <TransactionHistoryTable transactionHistory={transactionsData} />
        </section>
      </main>
    </DashboardLayout>
  );
};

export default DashboardPage;
