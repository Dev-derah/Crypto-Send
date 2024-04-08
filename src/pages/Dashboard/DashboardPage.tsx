import { CustomButton } from "../../components/Common";
import VerificationBanner from "../../components/Banners/VerificationBanner";
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
      <VerificationBanner textContent="Verify your Account by doing your KYC" />
      <main className="py-10 px-20">
        <section className="md:flex md:justify-between md:items-center">
          <div>
            <p className="text-lg">
              Welcome Back,<Username username="johndoe" size="large"/>
            </p>
          </div>
          <div className="flex gap-4">
            <CustomButton>Generate Invoice</CustomButton>
            <CustomButton
              isFilled={true}
              background="bg-primary"
            >
              Send Money
            </CustomButton>
          </div>
        </section>
        <section className="pt-section-padding">
          <h3>Summary</h3>
          <SummaryStatistics statistics={statistics} />
        </section>
        <section className="pt-section-padding">
          <p className=" text-xs">Asset Flow</p>
          <div className="flex justify-between items-center">
            <p className="text-[34px] flex items-center font-bold">
              $ 15,000
              <span className="text-sm text-success bg-success-100 mx-1 px-2 py-1 rounded-full">
                +2.4%
              </span>
            </p>
            <div className="flex gap-4">
              <CustomButton>Crypto flow</CustomButton>
              <CustomButton>Select range</CustomButton>
            </div>
          </div>
          <AssetFlowGraph graphData={graphData} />
        </section>
        <section className="pt-section-padding">
          <div className="flex justify-between">
            <p>Transaction History</p>
            <a className="underline">See all</a>
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
