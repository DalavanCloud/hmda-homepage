import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <main className="home" id="main-content">
      <div className=" usa-grid-full">
        <header className="usa-width-one-whole">
          <h1>The Home Mortgage Disclosure Act</h1>
          <p className="font-lead">
            HMDA requires many financial institutions to maintain, report, and
            publicly disclose information about mortgages.
          </p>
        </header>

        <div className="alert alert-info usa-width-one-whole">
          <div className="alert-body">
            <h3 className="alert-heading">Announcement</h3>
            <p className="alert-text">
              On August 31st, 2018, the Bureau released the{' '}
              <a href="https://www.consumerfinance.gov/policy-compliance/rulemaking/final-rules/partial-exemptions-from-requirements-of-home-mortgage-disclosure-act-under-regulation-c/">
                2018 HMDA Rule
              </a>{' '}
              and an updated{' '}
              <a href="https://s3.amazonaws.com/cfpb-hmda-public/prod/help/2018-hmda-fig-2018-hmda-rule.pdf">
                2018 FIG
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="usa-grid-full">
        <div className="card-container">
          <div className="card">
            <header>
              <h3>
                <a
                  href="/filing/2018/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Get started filing your HMDA data for 2018
                </a>
              </h3>
              <p>
                Beginning with HMDA data collected in or after 2017, financial
                institutions will use the HMDA Platform to upload their
                loan/application registers (LARs), review edits, certify the
                accuracy and completeness of the data, and submit data for the
                filing year.
              </p>
              <a
                href="https://ffiec.cfpb.gov/filing/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Access the 2017 HMDA Platform
              </a>
            </header>

            <header>
              <h3>Help for Filers</h3>
              <p>
                Published resources for financial institutions required to file
                Home Mortgage Disclosure Act (HMDA) data.
              </p>
            </header>
            <ul>
              <li>Filing Instructions Guide</li>
              <ul>
                <li>
                  <a
                    href="https://s3.amazonaws.com/cfpb-hmda-public/prod/help/2019-hmda-fig.pdf"
                    download={true}
                  >
                    For data collected in 2019
                  </a>
                </li>
                <li>
                  <a
                    href="https://s3.amazonaws.com/cfpb-hmda-public/prod/help/2018-hmda-fig-2018-hmda-rule.pdf"
                    download={true}
                  >
                    For data collected in 2018 incorporating the 2018 HMDA Rule
                  </a>
                </li>
                <li>
                  <a
                    href="https://s3.amazonaws.com/cfpb-hmda-public/prod/help/2018-hmda-fig.pdf"
                    download={true}
                  >
                    For data collected in 2018
                  </a>
                </li>
                <li>
                  <a
                    href="https://s3.amazonaws.com/cfpb-hmda-public/prod/help/2017-hmda-fig.pdf"
                    download={true}
                  >
                    For data collected in 2017
                  </a>
                </li>
                <li>
                  For data collected in or before 2016, please visit the{' '}
                  <a href="https://www.ffiec.gov/hmda/fileformats.htm">
                    FFIEC website
                  </a>{' '}
                  for data submission resources.
                </li>
              </ul>
              <li>
                <a href="https://www.ffiec.gov/hmda/guide.htm">
                  Getting It Right Guide
                </a>
              </li>
              <li>
                <a
                  href="https://s3.amazonaws.com/cfpb-hmda-public/prod/help/HMDA-Loan-Scenarios.pdf"
                  download={true}
                >
                  Loan Scenarios
                </a>
              </li>
              <li>
                <a href="https://hmdahelp.consumerfinance.gov/knowledgebase/s/">
                  Self Service Knowledge Portal
                </a>
              </li>
            </ul>
          </div>

          <div className="card">
            <header>
              <h3>
                <a href="/tools/">Tools</a>
              </h3>
              <p>
                Here you can find various tools to assist you in getting your
                HMDA LAR ready for filing.
              </p>
              <ul>
                <li>
                  <a href="/tools/rate-spread">Rate Spread</a>
                </li>
                <li>
                  <a href="/tools/check-digit">Check Digit</a>
                </li>
                <li>
                  <a href="/tools/file-format-verification">
                    File Format Verification
                  </a>
                </li>
                <li>
                  <a href="/tools/lar-formatting">LAR Formatting</a>
                </li>
              </ul>
            </header>

            <header>
              <h3>
                <a href="/data-publication/">Data Publication</a>
              </h3>
              <p>
                The HMDA data and reports are the most comprehensive publicly
                available information on mortgage market activity.
              </p>
              <ul>
                <li>
                  <a href="/data-publication/modified-lar">Modified LAR</a>
                </li>
                <li>
                  <a href="/data-publication/disclosure-reports/2017">
                    Disclosure Reports
                  </a>
                </li>
                <li>
                  <a href="/data-publication/aggregate-reports/2017">
                    MSA/MD Aggregate Reports
                  </a>
                </li>
                <li>
                  <a href="/data-publication/national-aggregate-reports/2017">
                    National Aggregate Reports
                  </a>
                </li>
                <li>
                  <a href="/data-publication/snapshot-national-loan-level-dataset">
                    Snapshot National Loan-Level Dataset
                  </a>
                </li>
                <li>
                  <a href="/data-publication/dynamic-national-loan-level-dataset">
                    Dynamic National Loan-Level Dataset
                  </a>
                </li>
              </ul>
            </header>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
