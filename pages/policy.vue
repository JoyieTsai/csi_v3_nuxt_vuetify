<template>
  <v-app>
    <v-main>
      <!-- Cover -->
      <div class="hero-section sm" :style="{
          backgroundImage: `url(images/covers/${category}/${coverimg})`,
        }">
        <div class="main-container tw-mx-auto tw-flex tw-items-center">
          <div class="tw-flex-1 tw-flex-col tw-text-white tw-text-center">
            <div class="header-1 tw-leading-snug">{{ title }}</div>
          </div>
        </div>
      </div>

      <div class="main-container tw-mx-auto">
        <div class="tw-flex tw-flex-col md:tw-flex-row tw-my-12 xl:tw-my-28">
          <div class="tw-pt-5 md:tw-pt-0 tw-pb-5">
            <ul class="
                md:tw-w-44
                xl:tw-w-60
                tw-border-l-8
                border-primary-light
                tw-pl-5
              ">
              <li v-for="(link, index) in links" :key="index" class="tw-mb-5">
                <nuxt-link :to="'/' + link.url" class="title md:tw-text-xl text-link">{{ link.title }}
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="terms-body">
            <div class="tw-text-lg xl:tw-text-xl tw-mb-5 tw-opacity-70">
              {{ subtitle }}
            </div>
            <p>
              CSI Technology Group is committed to data privacy and security.
              The following Privacy Policy applies to www.csitech.com
              (collectively referred to herein as the “Site”) on or in which it
              is posted, linked, or referenced.
            </p>
            <p>
              The Privacy Policy describes our practices and policies regarding
              the collection and use of personal information and sets forth your
              privacy rights. This Privacy Policy also applies to information we
              collect through other means about you, including offline and from
              third parties. If you do not agree with our Privacy Policy, you
              have a choice not to use our Site. By using the Site, you agree to
              be bound by our Privacy Policy and the accompanying Terms of Use.
            </p>
            <br />

            <div class="header-5 tw-capitalize">
              DIGITAL MILLENNIUM COPYRIGHT ACT (DMCA) NOTICE AND POLICY
            </div>
            <p>
              <strong>Notifications</strong>
            </p>
            <p>
              We respect the intellectual property rights of others. If you
              believe that any material available on or through the Site
              infringes upon any copyright you own or control, please
              immediately notify us using the contact information provided at
              www.csitech.com (a “Notification”). A copy of your Notification
              will be sent to the person who posted or stored the material
              addressed in the Notification. Please be advised that pursuant to
              federal law you may be held liable for damages if you make
              material misrepresentations in a Notification. Thus, if you are
              not sure that material located on or linked to by the Site
              infringes your copyright, you should consider first contacting an
              attorney.
            </p>
            <p>
              All Notifications should meet the requirements of DMCA 17 U.S.C. §
              512(c)(3) and include the following information: (1) A physical or
              electronic signature of a person authorized to act on behalf of
              the owner of an exclusive right that is allegedly infringed; (2)
              identification of the copyrighted work claimed to have been
              infringed, or, if multiple copyrighted works on the Site are
              covered by the Notification, a representative list of such works
              on the Site; (3) identification of the material that is claimed to
              be infringing or to be the subject of infringing activity and that
              is to be removed or access to which is to be disabled, and
              information reasonably sufficient to permit us to locate the
              material; (4) information reasonably sufficient to permit us to
              contact the complaining party, such as an address, telephone
              number, and, if available, an email address at which the
              complaining party may be contacted; (5) a statement that the
              complaining party has a good faith belief that use of the material
              in the manner complained of is not authorized by the copyright
              owner, its agent, or the law; and (6) a statement that the
              information in the notification is accurate, and under penalty of
              perjury, that the complaining party is authorized to act on behalf
              of the owner of an exclusive right that is allegedly infringed
              upon.
            </p>
            <br />
            <p>
              <strong>Counter Notification</strong>
            </p>
            <p>
              If you believe your own copyrighted material has been removed from
              the Site as a result of a mistake or misidentification, you may
              submit a written counter notification to us using the contact
              information provided at www.csitech.com. (A “Counter
              Notification”). To be an effective Counter Notification under the
              DMCA, your Counter Notification must include substantially the
              following: (1) identification of the material that has been
              removed or disabled and the location at which the material
              appeared before it was removed or disabled; (2) a statement that
              you consent to the jurisdiction of the Federal District Court in
              which your address is located, or if your address is outside the
              United States, for any judicial district in which we are located;
              (3) a statement that you will accept service of process from the
              party that filed the Notification or the party's agent; (4) your
              name, address, and telephone number; (5) a statement under penalty
              of perjury that you have a good faith belief that the material in
              question was removed or disabled as a result of a mistake or
              misidentification of the material to be removed or disabled; and
              (6) your physical or electronic signature.
            </p>
            <p>
              If you send us a valid, written Counter Notification meeting the
              requirements described above, we will restore your removed or
              disabled material, unless we first receive notice from the party
              filing the Notification informing us that such party has filed a
              court action to restrain you from engaging in infringing activity
              related to the material in question. Please note that if you
              materially misrepresent that the disabled or removed content was
              removed by mistake or misidentification, you may be liable for
              damages, including costs and attorney's fees. Filing a false
              Counter Notification constitutes perjury.
            </p>
            <br />

            <div class="header-5 tw-capitalize">TERM AND TERMINATION</div>
            <p>
              The Privacy Policy shall remain in full force and effect while you
              use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THE PRIVACY
              POLICY, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND
              WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE
              (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY
              REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH
              OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THIS
              PRIVACY POLICY OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY
              TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR DELETE ANY
              CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT
              WARNING, AT OUR SOLE DISCRETION.
            </p>
            <p>
              If we terminate or suspend your account for any reason, you are
              prohibited from registering and creating a new account under your
              name, a fake or borrowed name, or the name of any third party,
              even if you may be acting on behalf of the third party. In
              addition to terminating or suspending your account, we reserve the
              right to take appropriate legal action, including without
              limitation pursuing civil, criminal, and injunctive redress.
            </p>
            <br />

            <div class="header-5 tw-capitalize">
              MODIFICATIONS AND INTERRUPTIONS
            </div>
            <p>
              We reserve the right to change, modify, or remove the contents of
              the Site at any time or for any reason at our sole discretion
              without notice. However, we have no obligation to update any
              information on our Site. We also reserve the right to modify or
              discontinue all or part of the Site without notice at any time. We
              will not be liable to you or any third party for any modification,
              price change, suspension, or discontinuance of the Site.
            </p>
            <p>
              We cannot guarantee the Site will be available at all times. We
              may experience hardware, software, or other problems or need to
              perform maintenance related to the Site, resulting in
              interruptions, delays, or errors. We reserve the right to change,
              revise, update, suspend, discontinue, or otherwise modify the Site
              at any time or for any reason without notice to you. You agree
              that we have no liability whatsoever for any loss, damage, or
              inconvenience caused by your inability to access or use the Site
              during any downtime or discontinuance of the Site. Nothing in the
              Privacy Policy or the Terms of Use will be construed to obligate
              us to maintain and support the Site or to supply any corrections,
              updates, or releases in connection therewith.
            </p>
            <br />

            <div class="header-5 tw-capitalize">GOVERNING LAW</div>
            <p>
              The Privacy Policy, Terms of Use, and your use of the Site are
              governed by and construed in accordance with the laws of the State
              of New Jersey applicable to agreements made and to be entirely
              performed within the State of New Jersey, without regard to its
              conflict of law principles.
            </p>
            <br />

            <div class="header-5 tw-capitalize">DISPUTE RESOLUTION</div>
            <p>
              <strong>Informal Negotiations</strong>
            </p>
            <p>
              To expedite resolution and control the cost of any dispute,
              controversy, or claim related to the Privacy Policy or Terms of
              Use (each a "Dispute" and collectively, the “Disputes”) brought by
              either you or us (individually, a “Party” and collectively, the
              “Parties”), the Parties agree to first attempt to negotiate any
              Dispute (except those Disputes expressly provided below)
              informally for at least thirty (30) days before initiating
              arbitration. Such informal negotiations commence upon written
              notice from one Party to the other Party.
            </p>
            <br />
            <p>
              <strong>Binding Arbitration</strong>
            </p>
            <p>
              If the Parties are unable to resolve a Dispute through informal
              negotiations, the Dispute (except those Disputes expressly
              excluded below) will be finally and exclusively resolved by
              binding arbitration. YOU UNDERSTAND THAT WITHOUT THIS PROVISION,
              YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL.
              The arbitration shall be commenced and conducted under the
              Commercial Arbitration Rules of the American Arbitration
              Association ("AAA") and, where appropriate, the AAA’s
              Supplementary Procedures for Consumer Related Disputes ("AAA
              Consumer Rules"), both of which are available at the AAA website
              www.adr.org. Your arbitration fees and your share of arbitrator
              compensation shall be governed by the AAA Consumer Rules and,
              where appropriate, limited by the AAA Consumer Rules. The
              arbitration may be conducted in person, through the submission of
              documents, by phone, or online. The arbitrator will make a
              decision in writing, but need not provide a statement of reasons
              unless requested by either Party. The arbitrator must follow
              applicable law, and any award may be challenged if the arbitrator
              fails to do so. Except where otherwise required by the applicable
              AAA rules or applicable law, the arbitration will take place in
              Middlesex County, New Jersey. Except as otherwise provided herein,
              the Parties may litigate in court to compel arbitration, stay
              proceedings pending arbitration, or to confirm, modify, vacate, or
              enter judgment on the award entered by the arbitrator.
            </p>
            <p>
              If for any reason, a Dispute proceeds in court rather than
              arbitration, the Dispute shall be commenced or prosecuted in the
              state and federal courts located in State of New Jersey, and the
              Parties hereby consent to, and waive all defenses of lack of
              personal jurisdiction, and forum non convenience with respect to
              venue and jurisdiction in such state and federal courts.
              Application of the United Nations Convention on Contracts for the
              International Sale of Goods and the Uniform Computer Information
              Transaction Act (UCITA) are excluded from the Privacy Policy.
            </p>
            <p>
              In no event shall any Dispute brought by either Party related in
              any way to the Site be commenced more than one (1) years after the
              cause of action arose. If this provision is found to be illegal or
              unenforceable, then neither Party will elect to arbitrate any
              Dispute falling within that portion of this provision found to be
              illegal or unenforceable and such Dispute shall be decided by a
              court of competent jurisdiction within the courts listed for
              jurisdiction above, and the Parties agree to submit to the
              personal jurisdiction of that court.
            </p>
            <br />
            <p>
              <strong>Restrictions</strong>
            </p>
            <p>
              The Parties agree that any arbitration shall be limited to the
              Dispute between the Parties individually. To the full extent
              permitted by law, (a) no arbitration shall be joined with any
              other proceeding; (b) there is no right or authority for any
              Dispute to be arbitrated on a class-action basis or to utilize
              class action procedures; and (c) there is no right or authority
              for any Dispute to be brought in a purported representative
              capacity on behalf of the general public or any other persons.
            </p>
            <br />
            <p>
              <strong>Exceptions to Informal Negotiations and Arbitration</strong>
            </p>
            <p>
              The Parties agree that the following Disputes are not subject to
              the above provisions concerning informal negotiations and binding
              arbitration: (a) any Disputes seeking to enforce or protect, or
              concerning the validity of, any of the intellectual property
              rights of a Party; (b) any Dispute related to, or arising from,
              allegations of theft, piracy, invasion of privacy, or unauthorized
              use; and (c) any claim for injunctive relief. If this provision is
              found to be illegal or unenforceable, then neither Party will
              elect to arbitrate any Dispute falling within that portion of this
              provision found to be illegal or unenforceable and such Dispute
              shall be decided by a court of competent jurisdiction within the
              courts listed for jurisdiction above, and the Parties agree to
              submit to the personal jurisdiction of that court.
            </p>
            <br />

            <div class="header-5 tw-capitalize">CORRECTIONS</div>
            <p>
              There may be information on the Site that contains typographical
              errors, inaccuracies, or omissions, including descriptions,
              pricing, availability, and various other information. We reserve
              the right to correct any errors, inaccuracies, or omissions and to
              change or update the information on the Site at any time, without
              prior notice.
            </p>
            <br />

            <div class="header-5 tw-capitalize">DISCLAIMER</div>
            <p>
              THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE
              THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE
              RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL
              WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND
              YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED
              WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
              AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS
              ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE
              CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO
              LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR
              INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR
              PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR
              ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR
              USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION
              AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION
              OR CESSATION OF TRANSMISSION TO OR FROM THE SITE, (5) ANY BUGS,
              VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR
              THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR
              OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE
              OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED,
              TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT
              WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY
              PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH
              THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE
              APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE
              WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING
              ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF
              PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE
              THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST
              JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
            </p>
            <br />

            <div class="header-5 tw-capitalize">LIMITATIONS OF LIABILITY</div>
            <p>
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
              LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
              CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
              DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR
              OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE
              BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING
              ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU
              FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION,
              WILL AT ALL TIMES BE LIMITED TO THE LESSER OF THE AMOUNT PAID, IF
              ANY, BY YOU TO US OR $100.00 USD. CERTAIN STATE LAWS DO NOT ALLOW
              LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION
              OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE
              ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY
              HAVE ADDITIONAL RIGHTS.
            </p>
            <br />

            <div class="header-5 tw-capitalize">INDEMNIFICATION</div>
            <p>
              You agree to defend, indemnify, and hold us harmless, including
              our subsidiaries, affiliates, and all of our respective officers,
              agents, partners, and employees, from and against any loss,
              damage, liability, claim, or demand, including reasonable
              attorneys’ fees and expenses, made by any third party due to or
              arising out of: (1) your Contributions; (2) use of the Site; (3)
              breach of the Privacy Policy or Terms of Use; (4) any breach of
              your representations and warranties set forth in the Privacy
              Policy or Terms of Use; (5) your violation of the rights of a
              third party, including but not limited to intellectual property
              rights; or (6) any overt harmful act toward any other user of the
              Site with whom you connected via the Site. Notwithstanding the
              foregoing, we reserve the right, at your expense, to assume the
              exclusive defense and control of any matter for which you are
              required to indemnify us, and you agree to cooperate, at your
              expense, with our defense of such claims. We will use reasonable
              efforts to notify you of any such claim, action, or proceeding
              which is subject to this indemnification upon becoming aware of
              it.
            </p>
            <br />

            <div class="header-5 tw-capitalize">USER DATA</div>
            <p>
              We will maintain certain data that you transmit to the Site for
              the purpose of managing the performance of the Site, as well as
              data relating to your use of the Site. Although we perform regular
              routine backups of data, you are solely responsible for all data
              that you transmit or that relates to any activity you have
              undertaken using the Site. You agree that we shall have no
              liability to you for any loss or corruption of any such data, and
              you hereby waive any right of action against us arising from any
              such loss or corruption of such data.
            </p>
            <br />

            <div class="header-5 tw-capitalize">
              ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
            </div>
            <p>
              Visiting the Site, sending us emails, and completing online forms
              constitute electronic communications. You consent to receive
              electronic communications, and you agree that all agreements,
              notices, disclosures, and other communications we provide to you
              electronically, via email and on the Site, satisfy any legal
              requirement that such communication be in writing. YOU HEREBY
              AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND
              OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES,
              AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA
              THE SITE. You hereby waive any rights or requirements under any
              statutes, regulations, rules, ordinances, or other laws in any
              jurisdiction which require an original signature or delivery or
              retention of non-electronic records, or to payments or the
              granting of credits by any means other than electronic means.
            </p>
            <br />

            <div class="header-5 tw-capitalize">
              CALIFORNIA USERS AND RESIDENTS
            </div>
            <p>
              If any complaint with us is not satisfactorily resolved, you can
              contact the Complaint Assistance Unit of the Division of Consumer
              Services of the California Department of Consumer Affairs in
              writing at 1625 North Market Blvd., Suite N 112, Sacramento,
              California 95834 or by telephone at (800) 952-5210 or (916)
              445-1254.
            </p>
            <br />

            <div class="header-5 tw-capitalize">EXTERNAL SITES</div>
            <p>
              The Site may contain links to External Sites. We have no control
              over the privacy practices or the content of these External Sites.
              As such, we are not responsible for the content or the privacy
              policies of those External Sites. You should check the applicable
              third-party privacy policy and terms of use when visiting any
              External Sites.
            </p>
            <br />

            <div class="header-5 tw-capitalize">CHILDREN’S PRIVACY</div>
            <p>
              The Site is intended for users who are at least 13 years of age.
              All users who are minors in the jurisdiction in which they reside
              (generally under the age of 18) must have the permission of, and
              be directly supervised by, their parent or guardian to use the
              Site. If you are a minor, you must have your parent or guardian
              read and agree to the Privacy Policy prior to you using the Site.
            </p>
            <p>
              We do not knowingly accept, request, or solicit information from
              children or knowingly market to children. Therefore, in accordance
              with the U.S. Children’s Online Privacy Protection Act, if we
              receive actual knowledge that anyone under the age of 13 has
              provided personal information to us without the requisite and
              verifiable parental consent, we will delete that information from
              the Site as quickly as is reasonably practical.
            </p>
            <br />

            <div class="header-5 tw-capitalize">NON-US RESIDENTS</div>
            <p>
              If you access the Site from the European Union, Asia, or any other
              region of the world with laws or other requirements governing
              personal data collection, use, or disclosure that differ from
              applicable laws in the United States, then through your continued
              use of the Site, you are transferring your data to the United
              States, and you expressly consent to have your data transferred to
              and processed in the United States.
            </p>
            <br />

            <div class="header-5 tw-capitalize">CONTACT US</div>
            <p>
              If you have questions or concerns regarding this Privacy Policy,
              please contact us at: (732) 346-0200.
            </p>
            <br />
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    category: 'page',
    title: 'Privacy Policy',
    subtitle: 'Last Updated: April 10, 2022',
    coverimg: 'blue.jpg',
    links: [
      { title: 'Terms of Use', url: 'terms' },
      { title: 'Privacy Policy', url: 'policy' },
    ],
  }),
  head() {
    return {
      titleTemplate: '%s | ' + this.title,
      meta: [{ name: 'description', content: this.title }],
    }
  },
}
</script>
