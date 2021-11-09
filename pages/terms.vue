<template>
  <v-app>
    <v-main>
      <!-- Cover -->
      <div
        class="hero-section sm"
        :style="{
          backgroundImage: `url(images/covers/${category}/${coverimg})`,
        }"
      >
        <div class="main-container tw-mx-auto tw-flex tw-items-center">
          <div class="tw-flex-1 tw-flex-col tw-text-white tw-text-center">
            <div class="header-1 tw-leading-snug">{{ title }}</div>
            <div class="tw-text-2xl">{{ subtitle }}</div>
          </div>
        </div>
      </div>

      <div class="main-container tw-mx-auto">
        <div class="tw-flex tw-flex-col md:tw-flex-row tw-my-12 xl:tw-my-28">
          <div class="tw-pb-5">
            <ul
              class="
                tw-w-44
                xl:tw-w-60
                tw-border-l-8
                border-primary-light
                tw-pl-5
              "
            >
              <li v-for="(link, index) in links" :key="index" class="tw-mb-5">
                <nuxt-link :to="link.url" class="title md:tw-text-xl text-link"
                  >{{ link.title }}
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="terms-body">
            <div class="header-5 tw-capitalize">AGREEMENT TO TERMS</div>
            <p>
              These Terms of Use constitute a legally binding agreement made
              between you, whether personally or on behalf of an entity (“you”)
              and CSI Technology Group, doing business as InfoShare
              ("InfoShare", “we”, “us”, or “our”), concerning your access to and
              use of the https://www.csitech.com website as well as any other
              media form, media channel, mobile website or mobile application
              related, linked, or otherwise connected thereto (collectively, the
              “Site”). You agree that by accessing the Site, you have read,
              understood, and agreed to be bound by all of these Terms of Use.
              IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE
              EXPRESSLY PROHIBITED FROM USING THE INFOSHARE VICTIM WITNESS
              PORTAL APPLICATION AND YOU MUST DISCONTINUE USE IMMEDIATELY.
            </p>
            <p>
              Supplemental terms and conditions or documents that may be posted
              on the Site from time to time are hereby expressly incorporated
              herein by reference. We reserve the right, in our sole discretion,
              to make changes or modifications to these Terms of Use at any time
              and for any reason. We will alert you about any changes by
              updating the “Last updated” date of these Terms of Use, and you
              waive any right to receive specific notice of each such change. It
              is your responsibility to periodically review these Terms of Use
              to stay informed of updates. You will be subject to and will be
              deemed to have been made aware of and to have accepted, the
              changes in any revised Terms of Use by your continued use of the
              Site after the date such revised Terms of Use are posted.
            </p>
            <p>
              The information provided on the Site is not intended for
              distribution to or use by any person or entity in any jurisdiction
              or country&nbsp; where&nbsp; such&nbsp; distribution&nbsp;
              or&nbsp; use&nbsp; would&nbsp; be&nbsp; contrary&nbsp; to&nbsp;
              law&nbsp; or&nbsp; regulation&nbsp; or&nbsp; which&nbsp;
              would&nbsp; subject us to any registration requirement within such
              jurisdiction or country. Accordingly, those persons who choose to
              access the Site from other locations do so on their own initiative
              and are solely responsible for compliance with local laws, if and
              to the extent local laws are applicable.
            </p>
            <p>
              The Site is intended for users who are at least 13 years of age.
              All users who are minors in the jurisdiction in which they reside
              (generally under the age of 18) must have the permission of, and
              be directly supervised by, their parent or guardian to use the
              Site. If you are a minor, you must have your parent or guardian
              read and agree to these Terms of Use prior to you using the Site.
            </p>
            <br />
            <div class="header-5 tw-capitalize">
              INTELLECTUAL PROPERTY RIGHTS
            </div>
            <p>
              Unless otherwise indicated, the Site is our proprietary property
              and all source code, databases, functionality, software, website
              designs, audio, video, text, photographs, text, photographs, and
              graphics on the Site (collectively, the “Content”) and the
              trademarks, service marks, and logos contained therein (the
              “Marks”) are owned or controlled by us or licensed to us, and are
              protected by copyright and trademark laws and various other
              intellectual property rights and unfair competition laws of the
              United States, foreign jurisdictions, and international
              conventions. The Content and the Marks are provided on the Site
              “AS IS” for your information and personal use only. Except as
              expressly provided in these Terms of Use, no part of the Site and
              no Content or Marks may be copied, reproduced, aggregated,
              republished, uploaded, posted, publicly displayed, encoded,
              translated, transmitted, distributed, sold, licensed, or otherwise
              exploited for any commercial purpose whatsoever, without our
              express prior written permission.
            </p>
            <p>
              Provided that you are eligible to use the Site, you are granted a
              limited license to access and use the Site and to download or
              print a copy of any portion of the Content to which you have
              properly gained access solely for your personal, non-commercial
              use. We reserve all rights not expressly granted to you in and to
              the Site, the Content and the Marks.
            </p>
            <br />
            <div class="header-5 tw-capitalize">USER REPRESENTATIONS</div>
            <p>By using the Site, you represent and warrant that:</p>
            <ul>
              <li>
                (1) you have the legal capacity and you agree to comply with
                these Terms of Use;
              </li>
              <li>(2) you are not under the age of 13;</li>
              <li>
                (3) you are not a minor in the jurisdiction in which you reside,
                or if a minor, you have received parental permission to use the
                Site;
              </li>
              <li>
                (4) you will not access the Site through automated or non-human
                means, whether through a bot, script, or otherwise;
              </li>
              <li>
                (5) you will not use the Site for any illegal or unauthorized
                purpose; and
              </li>
              <li>
                (6) your use of the Site will not violate any applicable law or
                regulation.
              </li>
            </ul>
            <p>
              If you provide any information that is untrue, inaccurate, not
              current, or incomplete, we have the right to suspend or terminate
              your account and refuse any and all current or future use of the
              Site (or any portion thereof).
            </p>
            <br />

            <div class="header-5 tw-capitalize">PROHIBITED ACTIVITIES</div>
            <p>
              You may not access or use the Site for any purpose other than that
              for which we make the Site available. The Site may not be used in
              connection with any commercial endeavors except those that are
              specifically endorsed or approved by us.
            </p>
            <p>As a user of the Site, you agree not to:</p>
            <ol class="tw-list-decimal tw-ml-7">
              <li>
                Use the Site to advertise or offer to sell goods and services.
              </li>
              <li>
                Circumvent, disable, or otherwise interfere with
                security-related features of the Site, including features that
                prevent or restrict the use or copying of any Content or enforce
                limitations on the use of the Site and/or the Content contained
                therein.
              </li>
              <li>Engage in unauthorized framing of or linking to the Site.</li>
              <li>
                Trick, defraud, or mislead us and other users, especially in any
                attempt to learn sensitive account information such as user
                passwords.
              </li>
              <li>
                Make improper use of our support services or submit false
                reports of abuse or misconduct.
              </li>
              <li>
                Engage in any automated use of the system, such as using scripts
                to send comments or messages, or using any data mining, robots,
                or similar data gathering and extraction tools.
              </li>
              <li>
                Interfere with, disrupt, or create an undue burden on the Site
                or the networks or services connected to the Site.
              </li>
              <li>
                Attempt to impersonate another user or person or use the
                username of another user.
              </li>
              <li>Sell or otherwise transfer your profile.</li>
              <li>
                Use any information obtained from the Site in order to harass,
                abuse, or harm another person.
              </li>
              <li>
                Use the Site as part of any effort to compete with us or
                otherwise use the Site and/or the Content for any
                revenue-generating endeavor or commercial enterprise.
              </li>
              <li>
                Decipher, decompile, disassemble, or reverse engineer any of the
                software comprising or in any way making up a part of the Site.
              </li>
              <li>
                Attempt to bypass any measures of the Site designed to prevent
                or restrict access to the Site, or any portion of the Site.
              </li>
              <li>
                Harass, annoy, intimidate, or threaten any of our employees or
                agents engaged in providing any portion of the Site to you.
              </li>
              <li>
                Delete the copyright or other proprietary rights notice from any
                Content.
              </li>
              <li>
                Copy or adapt the Site’s software, including but not limited to
                Flash, PHP, HTML, JavaScript, or other code.
              </li>
              <li>
                Upload or transmit (or attempt to upload or to transmit)
                viruses, Trojan horses, or other material, including excessive
                use of capital letters and spamming (continuous posting of
                repetitive text), that interferes with any party’s uninterrupted
                use and enjoyment of the Site or modifies, impairs, disrupts,
                alters, or interferes with the use, features, functions,
                operation, or maintenance of the Site.
              </li>
              <li>
                Upload or transmit (or attempt to upload or to transmit) any
                material that acts as a passive or active information collection
                or transmission mechanism, including without limitation, clear
                graphics interchange formats (“gifs”), 1×1 pixels, web bugs,
                cookies, or other similar devices (sometimes referred to as
                “spyware” or “passive collection mechanisms” or “pcms”).
              </li>
              <li>
                Except as may be the result of standard search engine or
                Internet browser usage, use, launch, develop, or distribute any
                automated system, including without limitation, any spider,
                robot, cheat utility, scraper, or offline reader that accesses
                the Site, or using or launching any unauthorized script or other
                software.
              </li>
              <li>
                Disparage, tarnish, or otherwise harm, in our opinion, us and/or
                the Site.
              </li>
              <li>
                Use the Site in a manner inconsistent with any applicable laws
                or regulations.
              </li>
            </ol>
            <br />

            <div class="header-5 tw-capitalize">MOBILE APPLICATION LICENSE</div>
            <p>
              <strong>Use License</strong>
            </p>
            <p>
              If you access the Site via a mobile application, then we grant you
              a revocable, non-exclusive, non-transferable, limited right to
              install and use the mobile application on wireless electronic
              devices owned or controlled by you, and to access and use the
              mobile application on such devices strictly in accordance with the
              terms and conditions of this mobile application license contained
              in these Terms of Use. You shall not: (1) decompile, reverse
              engineer, disassemble, attempt to derive the source code of, or
              decrypt the application; (2) make any modification, adaptation,
              improvement, enhancement, translation, or derivative work from the
              application; (3) violate any applicable laws, rules, or
              regulations in connection with your access or use of the
              application; (4) remove, alter, or obscure any proprietary notice
              (including any notice of copyright or trademark) posted by us or
              the licensors of the application; (5) use the application for any
              revenue generating endeavor, commercial enterprise, or other
              purpose for which it is not designed or intended; (6) make the
              application available over a network or other environment
              permitting access or use by multiple devices or users at the same
              time; (7) use the application for creating a product, service, or
              software that is, directly or indirectly, competitive&nbsp; with
              or in any way a substitute for the application; (8) use the
              application to send automated queries to any website or to send
              any unsolicited commercial e-mail; or (9) use any proprietary
              information or any of our interfaces or our other intellectual
              property in the design, development, manufacture, licensing, or
              distribution of any applications, accessories,&nbsp; or devices
              for use with the application.
            </p>
            <br />
            <p>
              <strong>Apple and Android Devices</strong>
            </p>
            <p>
              The following terms apply when you use a mobile application
              obtained from either the Apple Store or Google Play (each an “App
              Distributor”) to access the Site: (1) the license granted to you
              for our mobile application is limited to a non- transferable
              license to use the application on a device that utilizes the Apple
              iOS or Android operating systems, as applicable, and in accordance
              with the usage rules set forth in the applicable App Distributor’s
              terms of service; (2) we&nbsp; are responsible for providing any
              maintenance and support services with respect to the mobile
              application as specified in the terms and conditions of this
              mobile application license contained in these Terms of Use or as
              otherwise required under applicable law, and you acknowledge that
              each App Distributor has no obligation whatsoever to furnish any
              maintenance and support services with respect to the mobile
              application; (3) in the event of any failure of the mobile
              application to conform to any applicable warranty, you may notify
              the applicable App Distributor, and the App Distributor, in
              accordance with its terms and policies, may refund the purchase
              price, if any, paid for the mobile application, and to&nbsp; the
              maximum extent permitted by applicable law, the App Distributor
              will have no other warranty obligation whatsoever with respect to
              the mobile application; (4) you represent and warrant that (i) you
              are not located in a country that is subject to a U.S. government
              embargo, or that has been designated by the U.S. government as a
              “terrorist supporting” country and (ii) you are not listed on any
              U.S. government list of prohibited or restricted parties; (5) you
              must comply with applicable third-party terms of agreement when
              using the mobile application, e.g., if you have a VoIP
              application, then you must not be in violation of their wireless
              data service agreement when using the mobile application; and (6)
              you acknowledge and agree that the App Distributors are
              third-party beneficiaries of the terms and conditions in this
              mobile application license contained in these Terms of Use, and
              that each App Distributor will have the right (and will
              be&nbsp;&nbsp; deemed to have accepted the right) to enforce the
              terms and conditions in this mobile application license contained
              in these Terms of Use against you as a third-party beneficiary
              thereof.
            </p>
            <br />

            <div class="header-5 tw-capitalize">
              CONFIDENTIAL INFORMATION SUBMISSIONS
            </div>

            <ol class="tw-list-decimal tw-ml-7">
              <li>
                (a) As used herein, “
                <strong>Confidential Information</strong>” means all
                information, data, reports, interpretations, records, and any
                other information provided by the registered user through the
                user of this application which is not available to the general
                public. In addition, Confidential Information also means any
                information disclosed by the user through the use of this
                application to the specific government agency sponsoring the
                application that at the time of disclosure was marked
                confidential or is reasonably understood by us to be
                confidential. (b) Confidential Information shall not include
                information that (i) has or can become generally available to
                the public other than as a result of a disclosure by the
                government entity sponsoring this application or any of its
                representatives, (ii) was made available to government entity
                sponsoring this application on a non-confidential basis prior to
                its disclosure to the sponsoring government entity by the
                registered user, (iii) has become available to the sponsoring
                government entity on a non-confidential basis from a source
                other than the registered user
              </li>
              <li>
                The government entity sponsoring this application agrees that
                Confidential Information shall not be used for any purpose other
                than as provided herein. The government entity sponsoring this
                application shall use the same degree of care as it uses with
                respect to its own confidential information (but in no event
                less than a reasonable degree of care) to hold the user’s
                Confidential Information in confidence and shall not disclose
                the same to others, or use the same except for purposes of this
                Agreement, without the consent of the registered user. However,
                the government entity sponsoring this application may disclose
                Confidential Information to its subcontractors or affiliates who
                have a need to know the same for purposes of this Agreement. The
                government entity sponsoring this application shall inform its
                subcontractors and affiliates of the confidential and
                proprietary nature of such Confidential Information and they
                shall be directed to treat the same confidentially and shall
                agree in writing to abide by the provisions herein.
              </li>
              <li>
                In the event that the government entity sponsoring this
                application is required by lawful order of a court, other
                governmental agency or otherwise by applicable law to disclose
                any Confidential Information, which disclosure is not otherwise
                permitted hereunder, it is agreed that the government entity
                sponsoring this application will provide registered user with
                prompt notice of any such request or requirement so that the
                registered user may seek an appropriate protective order or
                waive compliance with the provisions of this Agreement. If,
                failing the entry of a protective order or the receipt of a
                waiver hereunder, the government entity sponsoring this
                application is compelled to disclose Confidential Information
                pursuant to such request or else stand liable for contempt or
                suffer other penalty, the government entity sponsoring this
                application may disclose that portion of the Confidential
                Information that the government entity sponsoring this
                application is compelled to disclosed as aforesaid. In any
                event, the government entity sponsoring this application will
                not oppose action by, and will cooperate with, the registered
                user to obtain an appropriate protective order. All references
                to the government entity sponsoring this application in this
                paragraph shall be deemed to include any third party to whom the
                government entity sponsoring this application disclosed the
                Confidential Information.
              </li>
              <li>
                The registered user may, in their sole discretion, make
                Confidential Information available to the government entity
                sponsoring this application on the following conditions: (a) The
                registered user shall not disassemble, including without
                limitation, reverse engineer or decompile any proprietary
                software or related intellectual property. (b) The type and
                quantity of Confidential Information furnished by the registered
                user to government agency sponsoring this application shall be
                at the sole discretion of the registered user. (c) The
                registered user shall hold the government agency sponsoring this
                application harmless for any damages as a result of the
                furnishing of intentionally false and or defamatory information
                and the subsequent disclosure and handling or use of said
                Confidential Information by the government agency sponsoring
                this application.
              </li>
            </ol>
            <br />

            <div class="header-5 tw-capitalize">SITE MANAGEMENT</div>
            <p>
              We reserve the right, but not the obligation, to: (1) monitor the
              Site for violations of these Terms of Use; (2) take appropriate
              legal action against anyone who, in our sole discretion, violates
              the law or these Terms of Use, including without limitation,
              reporting such user to law enforcement authorities; (3) in our
              sole discretion and without limitation, refuse, restrict access
              to, limit the availability of, or disable (to the extent
              technologically feasible) any of your Contributions or any portion
              thereof; (4) in our sole discretion and without limitation,
              notice, or liability, to remove from the Site or otherwise disable
              all files and content that are excessive in size or are in any way
              burdensome to our systems; and (5) otherwise manage the Site in a
              manner designed to protect our rights and property and to
              facilitate the proper functioning of the Site.
            </p>
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
    title: 'Terms of Service',
    subtitle: 'Last updated August 30th, 2018',
    coverimg: 'blue.jpg',
    links: [
      { title: 'Terms of Service', url: 'terms' },
      { title: 'Privacy Policy', url: 'policy' },
      { title: 'Security', url: 'security' },
    ],
  }),
  head() {
    return {
      titleTemplate: '%s - ' + this.title,
      meta: [{ name: 'description', content: this.title }],
    }
  },
}
</script>
