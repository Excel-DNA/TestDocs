import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Use .NET',
    img: require('@site/static/img/dotnet.png').default,
    description: (
      <>
        Excel-DNA is backed by powerful development tools (Visual Studio) and is accessible to many libraries. 
        Integration with .NET opens new possibilties such as multi-threading, real-time data / streaming functions, and asynchronous functions.
      </>
    ),
  },
  {
    title: 'Make User-Defined Functions',
    img: require('@site/static/img/udf.png').default,
    description: (
      <>
        With Excel-DNA it is possible to create customised functions that is supported by Excel's IntelliSense capabilities.
      </>
    ),
  },
  {
    title: 'Create Custom Ribbon Add-ins',
    img: require('@site/static/img/ribbon.png').default,
    description: (
      <>
        Excel-DNA can enhance User Experience by creating in Excel custom UI components.
      </>
    ),
  },
];

function hidecode(lang) {
  var element = document.getElementById(lang + "tab");
  element.classList.remove("tabs__item--active");
  element = document.getElementById(lang + "code");
  element.hidden = true;
  element.tabIndex = -1;
}

function showcode(lang) {
  var element = document.getElementById(lang + "tab");
  element.classList.add("tabs__item--active");
  element = document.getElementById(lang + "code");
  element.hidden = false;
  element.tabIndex = 0;

}
function codetabclicked(lang) {
  if (lang === "csharp") {
      showcode(lang);
      hidecode("vbnet");
      hidecode("fsharp");
  } else if (lang === "vbnet") {
     showcode(lang);
     hidecode("csharp");
     hidecode("fsharp");
  } else {
    showcode(lang);
    hidecode("csharp");
    hidecode("vbnet")
  }
}

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center"> 
      <img src={img} className={styles.featureImg}  />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="intro-content">
          <h1 className="text--center">Getting Started</h1>
          <p>The easiest way to make an Excel-DNA addin is to create a new project in Visual Studio:</p>
          <ol>
            <li>Select <b>Create a new project</b> and then select <b>Class Library</b> in either Visual Basic, C# or F#.</li>
            <li>Enter a name for the project.</li>
            <li> Under Framework, select the <b>.NET 6.0 (Long-term support)</b> option.</li>
            <br />
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ftMz0tcc4wE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
          </ol>
          <p>Once a new project was created, do the following:</p>
          <ol> 
           
            <li>Depending on the language of choice, in the .csproj, .vbproj, or .fsproj file, change the value between the <i>TargetFramework</i> tags to <b>net6.0-windows</b>.</li>
            <li>Add the following under <i>&lt;/PropertyGroup></i>:
            <pre>&lt;ItemGroup&gt;<br />
		             &nbsp;&nbsp;&nbsp;&nbsp;&lt;PackageReference Include="ExcelDna.Addin" Version="*-*"/&gt;<br />
	               &lt;/ItemGroup&gt;
            </pre></li>
            <li> Depending on the language of choice (C#, Visual Basic.NET or F#), add the following code to the class file (.cs, .vb or .fs):
              <div class="tabs-container tabList_node_modules-@docusaurus-theme-classic-lib-theme-Tabs-styles-module">
                <ul role="tablist" aria-orientation="horizontal" class="tabs">
                  <li id="csharptab" role="tab" tabindex="0" aria-selected="true" class="tabs__item tabItem_node_modules-@docusaurus-theme-classic-lib-theme-Tabs-styles-module tabs__item--active" onClick={() => codetabclicked('csharp')}>C#</li>
                  <li id="vbnettab" role="tab" tabindex="-1" aria-selected="false" class="tabs__item tabItem_node_modules-@docusaurus-theme-classic-lib-theme-Tabs-styles-module" onClick={() => codetabclicked('vbnet')}>VB.Net</li>
                  <li id="fsharptab" role="tab" tabindex="-1" aria-selected="false" class="tabs__item tabItem_node_modules-@docusaurus-theme-classic-lib-theme-Tabs-styles-module" onClick={() => codetabclicked('fsharp')}>F#</li>
                </ul>
                <div class="margin-top--md">
                  <div id="csharpcode" role="tabpanel" class="tabItem_node_modules-@docusaurus-theme-classic-lib-theme-TabItem-styles-module">
                    <div>
                      <div>
                        <pre tabindex="0" class="thin-scrollbar">
                          <code class="codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module">
                            <span class="token-line" style={{color: `rgb(57, 58, 52)`}}></span>
                            <span class="token keyword">using&nbsp;ExcelDna.Integration;<br /><br />public&nbsp;static&nbsp;class&nbsp;MyFunctions<br />&#123;<br />&nbsp;&nbsp;&nbsp;&nbsp;[ExcelFunction(Description&nbsp;=&nbsp;"My&nbsp;first&nbsp;.NET&nbsp;function")]<br />&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;static&nbsp;string&nbsp;SayHello(string&nbsp;name)<br />&nbsp;&nbsp;&nbsp;&nbsp;&#123;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;"Hello&nbsp;"&nbsp;+&nbsp;name;<br />&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />&#125;</span>
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                  <div id="vbnetcode" role="tabpanel" class="tabItem_node_modules-@docusaurus-theme-classic-lib-theme-TabItem-styles-module" hidden>
                    <div>
                      <div>
                        <pre tabindex="0" class="thin-scrollbar">
                          <code class="codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module">
                            <span class="token-line" style={{color: `rgb(57, 58, 52)`}}></span>
                            <span class="token keyword">Imports ExcelDna.Integration<br /><br />Public&nbsp;Module&nbsp;MyFunctions<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;ExcelFunction(Description:="My&nbsp;first&nbsp;.NET&nbsp;function")&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;Public&nbsp;Function&nbsp;SayHello(ByVal&nbsp;name&nbsp;As&nbsp;String)&nbsp;As&nbsp;String<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Return&nbsp;"Hello&nbsp;"&nbsp;&amp;&nbsp;name<br />&nbsp;&nbsp;&nbsp;&nbsp;End&nbsp;Function<br />End&nbsp;Module</span>
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                  <div id="fsharpcode" role="tabpanel" class="tabItem_node_modules-@docusaurus-theme-classic-lib-theme-TabItem-styles-module" hidden>
                    <div>
                      <div>
                        <pre tabindex="0" class="thin-scrollbar">
                          <code class="codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module">
                            <span class="token-line" style={{color: `rgb(57, 58, 52)`}}></span>
                            <span class="token keyword">module&nbsp;MyFunctions&nbsp;=&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;open&nbsp;Excel.Integration<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;[&lt;ExcelFunction(Description&nbsp;=&nbsp;"My&nbsp;first&nbsp;.NET&nbsp;function")&gt;]<br />&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;SayHello&nbsp;name&nbsp;=&nbsp;"Hello&nbsp;"&nbsp;+&nbsp;name</span>
                          </code>
                        </pre>
                      </div>
                     </div>
                  </div>
                </div>   
              </div>
            </li>
            <li>Compile, load and use the newly created function in Excel:
            <pre>=SayHello("World!")</pre></li>
            <br />
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/xCJqyLd7Je0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
          </ol>
        </div>
        <br />
        <hr />
        <br />
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <br />
        <div>
            <h1 className="text--center">Getting Help</h1>
            <p>For further help with Excel-DNA or to report an issue with the library, please feel free to contact us via our <a href="http://groups.google.com/group/exceldna" target="_blank" rel="noopener noreferrer">Excel-DNA Google Group</a>, which is our primary support channel. Within the Google Group, it is possible to find detailed, responsive help to queries and a searchable archive with over 5000 messages. </p>
            <p>Excel-DNA was made freely available because of our enthusiasm for Excel and the .NET Framework. We are looking forward to help you get started, knowing that the initial steps could be daunting to some. All Excel-DNA questions are welcome!</p>
            <h1 className="text--center">Supporting Excel-DNA</h1>
            <p>Encouragement of future development of Excel-DNA can be achieved through:</p>
            <ul class="">
              <li>Corporate Support Agreements or; </li>
              <li>Sponsoring the project via <a href="https://github.com/sponsors/Excel-DNA" target="_blank" rel="noopener noreferrer">GitHub Sponsors</a>.</li>
            </ul>
            <h2>Corporate Support Agreements</h2>
            <p>Corporate users who are using the Excel-DNA library as part of their critical infrastructure, may want to enter a Corporate Support Agreement (see Testimonials section below). For an annual subscription fee. This will ensure: </p>
            <ul class="">
              <li>Continuity of the project, with ongoing development and maintenance.</li>
              <li>Access to direct assistance and support in using the library.</li>
              <li>Priority for bug-fixes and feature requests that you submit.</li>
            </ul>
            <p>For more details, please contact us by email: <a href="mailto:govert@dnakode.com?Subject=Excel-DNA%20Support%20Agreement" target="_blank" rel="noopener noreferrer">govert@dnakode.com</a></p>
            <h2>Sponsorship</h2>
            <p>Sponsoring the Excel-DNA project is greatly appreciated and can be made via GitHub at: <a href="https://github.com/sponsors/Excel-DNA" target="_blank" rel="noopener noreferrer">https://github.com/sponsors/Excel-DNA</a></p>
        </div>
        <div>
          <h1 className="text--center">Testimonials</h1>
          <p>
            <a href="http://www.janestcapitcal.com" target="_blank" rel="noopener noreferrer">
            <img loading="lazy" class="float-image img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module" src="img/jane-street-logo.png" /></a>
            <br />
            <a href="http://www.janestcapital.com/" target="_blank" rel="noopener noreferrer">Jane Street</a> uses Excel-DNA.
          </p>
          <p>&nbsp;</p>
          <p>
            <a href="http://eqfltd.com" target="_blank" rel="noopener noreferrer">
            <img loading="lazy" class="float-image img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module" src="img/eq_logo.png" /></a>
            <br />
            "We migrated to Excel-DNA, which has simplified greatly our Excel interfacing. It is a superb product, superior to others we have used previously, and Govert is incredibly responsive and helpful in maintaining and improving it." - Alberto Cherubini, <a href="http://eqfltd.com/" target="_blank" rel="noopener noreferrer">EQ Finance</a>
          </p>
          <p>&nbsp;</p>
          <p>
            "Excel-DNA is in use in our major locations around the world and in many mission critical scenarios. Usage covers the full gamut of features from simple UDF add-ins to managing real-time trading flow, interacting with order management systems. The open source Excel-DNA project is incredibly useful to us. Thanks very much to Govert and contributors." - Paul Gresham, Hong Kong.
          </p>
          <p>&nbsp;</p>
          <p>
            <a href="http://www.calcbench.com" target="_blank" rel="noopener noreferrer">
              <img loading="lazy" class="float-image img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module" src="img/calcbench-logo.png" /></a>
              "I have never programmed with Excel and Excel-DNA allowed me build Calcbench's Excel Add-In in two weeks." - Andrew Kittredge, <a href="http://www.calcbench.com/" target="_blank" rel="noopener noreferrer">Calcbench</a>
          </p>
          <p>&nbsp;</p>
          <p>
            <a href="http://findynamics.com" target="_blank" rel="noopener noreferrer">
            <img loading="lazy" class="float-image img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module" src="img/xbrl-analyst-logo.png" /></a>
            "Excel-DNA is incredibly versatile and stable framework for building Excel add-ins and user-defined functions. With such a pivotal element in our project, we were very concerned about committing to Excel-DNA that was developed by an enthusiast. However, we quickly learned that Govert has created an outstanding open source project; that he is keen on helping with any challenging questions and that the community is active enough to sustain a healthy evolution of Excel-DNA." - Ilya Vadeiko, <a href="http://findynamics.com/" target="_blank" rel="noopener noreferrer">FinDynamics</a>
          </p>
          <p>&nbsp;</p>
          <p>
            <a href="http://solution7.co.uk" target="_blank" rel="noopener noreferrer">
            <img loading="lazy" class="float-image img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module" src="img/s7logo.png" /></a>
            "Excel-DNA is the open source project that quietly delivers a robust and simple to use extensibility framework for Microsoft Excel. When we felt we had outgrown VBA, no longer wanted the complexity of C++ and were thoroughly fed up with VSTO, Excel-DNA seemed a great choice and we haven't been let down.
          </p>
          <p>
            In Excel-DNA, combined with his incredible understanding of Excel integration, the .Net framework and passion for wanting to help others, Govert continues to deliver a project that makes Excel-DNA a 'no brainer' choice.
          </p>
          <p>
            Thank you to Govert and to everyone involved in Excel-DNA - well done." - Simon Miles, <a href="http://solution7.co.uk/" target="_blank" rel="noopener noreferrer">Solution 7</a>
          </p>
        </div>
      </div>
    </section>
  );
}
