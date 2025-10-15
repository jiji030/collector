import{_ as C}from"./D-yCh--Y.js";import{r as l,P as y,k as N,y as p,A as t,F as u,G as R,B as e,R as S,z as m}from"#entry";const T={class:"min-h-screen bg-white"},E={class:"bg-green-800 p-4"},M={class:"flex justify-between items-center max-w-7xl mx-auto"},k={class:"max-w-3xl mx-auto p-8"},I={key:0,class:"bg-white border rounded-lg"},O={class:"p-4 border-b"},H={class:"text-2xl"},F={class:"grid grid-cols-2 p-4 gap-4 border-b"},P={class:"text-2xl"},D={class:"text-2xl"},z={class:"flex justify-center gap-4 p-6"},B={class:"border-t"},L={class:"grid"},U={class:"grid"},G={class:"grid"},V={class:"grid"},Y={class:"grid"},$={class:"grid"},j={class:"grid"},W={class:"border-t charges-list"},J={class:"grid"},K={class:"amount"},q={class:"grid"},Q={class:"amount"},X={class:"grid"},Z={class:"amount"},tt={class:"grid"},st={class:"amount"},et={class:"grid"},ot={class:"amount"},lt={class:"grid"},nt={class:"amount"},it={class:"grid"},at={class:"amount"},dt={class:"border-t total-section"},rt={class:"grid"},pt={class:"amount"},ut={class:"grid"},mt={class:"amount"},ct={class:"grid"},gt={class:"amount"},vt={class:"border-t text-center"},xt={class:"small-text"},ht={__name:"[accountNumber]",setup(bt){const c=y();S();const r=l(null),i=l({accountNumber:c.params.accountNumber,accountName:"Arian Jay Prisco",meterNumber:"1687"}),a=l(300),d=l(500),g=N(()=>d.value-a.value),v=l("001-A"),x=l(300),b=l(300),f=l(5),A=l("Sep 13, 2025"),h=l("Jessica A. Ruslan"),n=l({excess:15,electricity:5,generator:5,connectorDamage:5,damage:5,others:5,penalty:0}),_=()=>{const o=window.open("","","width=220,height=800");o.document.write("<html><head><title>Receipt</title>"),o.document.write("<style>"),o.document.write(`
    @page {
      size: 58mm auto;
      margin: 0;
    }
    body {
      font-family: 'Arial Narrow', 'Franklin Gothic Medium Cond', sans-serif;
      width: 58mm;
      padding: 2mm;
      margin: 0;
      font-size: 8pt;
      line-height: 1.1;
    }
    .hidden { display: block !important; }
    p { 
      margin: 1mm 0;
      word-wrap: break-word;
      white-space: pre-wrap;
    }
    .text-center { text-align: center; }
    .border-t { 
      border-top: 1px dashed #000; 
      padding-top: 2mm; 
      margin-top: 2mm; 
    }
    .grid { 
      display: flex; 
      justify-content: space-between;
      align-items: baseline;
      gap: 2mm;
    }
    .grid p { margin: 0.5mm 0; }
    .grid p:first-child { 
      flex: 1;
      text-align: left;
    }
    .grid p:last-child { 
      flex: 0 0 auto;
      text-align: right;
    }
    .font-bold { font-weight: bold; }
    .company-name { 
      font-size: 10pt; 
      font-weight: bold;
      letter-spacing: 1px;
    }
    .receipt-header { 
      margin-bottom: 2mm;
      font-size: 7pt;
    }
    .receipt-header p {
      margin: 0.5mm 0;
    }
    .charges-list { margin: 2mm 0; }
    .charges-list .grid { margin: 0.5mm 0; }
    .total-section { 
      font-weight: bold;
      font-size: 9pt;
    }
    .small-text {
      font-size: 7pt;
    }
    .amount {
      font-family: 'Courier New', monospace;
    }
    @media print {
      html, body { width: 58mm; }
      .hidden { display: block !important; }
    }
  `),o.document.write("</style></head><body>"),o.document.write(r.value.innerHTML),o.document.write("</body></html>"),o.document.close(),o.print()};return(o,s)=>(m(),p("div",T,[t("div",E,[t("div",M,[s[2]||(s[2]=u('<div class="flex items-center gap-2"><img src="'+C+'" alt="CHARMAFA Logo" class="h-8"><div class="text-white"><h1 class="text-xl font-medium">CHARMAFA</h1><p class="text-sm">A WATERWORKS SERVICE ASSOCIATION</p></div></div>',1)),t("button",{onClick:s[0]||(s[0]=w=>o.$router.push("/dashboard")),class:"text-white hover:underline"},"Logout")])]),t("div",k,[s[29]||(s[29]=t("h2",{class:"text-3xl font-bold text-center mb-8"},"PAYMENT INFORMATION",-1)),i.value?(m(),p("div",I,[t("div",O,[s[3]||(s[3]=t("p",{class:"text-lg"},"Account Name:",-1)),t("p",H,e(i.value.accountName),1)]),t("div",F,[t("div",null,[s[4]||(s[4]=t("p",{class:"text-lg"},"Total Bill:",-1)),t("p",P,"₱"+e(a.value),1)]),t("div",null,[s[5]||(s[5]=t("p",{class:"text-lg"},"Cash:",-1)),t("p",D,"₱"+e(d.value),1)])]),t("div",z,[t("button",{onClick:s[1]||(s[1]=w=>o.$router.back()),class:"px-12 py-3 bg-red-500 text-white font-medium text-lg rounded"}," CANCEL "),t("button",{onClick:_,class:"px-12 py-3 bg-green-500 text-white font-medium text-lg rounded"}," PRINT ")])])):R("",!0),t("div",{ref_key:"receiptContent",ref:r,class:"hidden"},[s[28]||(s[28]=u('<div class="receipt-header text-center"><p class="company-name">CHARMAFA</p><p>CHARITO MAHAYAG FARMERS</p><p>ASSOCIATION</p><p class="small-text">Purok-2, Charito, Bayugan City</p><p class="small-text">Agusan del Sur</p><p class="small-text">TIN: 763-299-844-000</p><p class="small-text">Tel: (0948) 949-10-36 / (0909) 231-02-44</p></div>',1)),t("div",B,[t("div",L,[s[6]||(s[6]=t("p",null,"TS#:",-1)),t("p",null,e(v.value),1)]),t("div",U,[s[7]||(s[7]=t("p",null,"Date:",-1)),t("p",null,e(A.value),1)]),t("div",G,[s[8]||(s[8]=t("p",null,"Acct#:",-1)),t("p",null,e(i.value.accountNumber),1)]),t("div",V,[s[9]||(s[9]=t("p",null,"Meter#:",-1)),t("p",null,e(i.value.meterNumber),1)]),t("p",null,"Name: "+e(i.value.accountName),1),t("div",Y,[s[10]||(s[10]=t("p",null,"Prev:",-1)),t("p",null,e(x.value)+" CUM",1)]),t("div",$,[s[11]||(s[11]=t("p",null,"Pres:",-1)),t("p",null,e(b.value)+" CUM",1)]),t("div",j,[s[12]||(s[12]=t("p",null,"Free:",-1)),t("p",null,e(f.value)+" CUM",1)])]),t("div",W,[s[20]||(s[20]=t("p",{class:"text-center font-bold"},"CHARGES",-1)),t("div",J,[s[13]||(s[13]=t("p",null,"Excess CUM:",-1)),t("p",K,"₱"+e(n.value.excess),1)]),t("div",q,[s[14]||(s[14]=t("p",null,"Electricity:",-1)),t("p",Q,"₱"+e(n.value.electricity),1)]),t("div",X,[s[15]||(s[15]=t("p",null,"Generator:",-1)),t("p",Z,"₱"+e(n.value.generator),1)]),t("div",tt,[s[16]||(s[16]=t("p",null,"Conn.Damage:",-1)),t("p",st,"₱"+e(n.value.connectorDamage),1)]),t("div",et,[s[17]||(s[17]=t("p",null,"Damage:",-1)),t("p",ot,"₱"+e(n.value.damage),1)]),t("div",lt,[s[18]||(s[18]=t("p",null,"Others:",-1)),t("p",nt,"₱"+e(n.value.others),1)]),t("div",it,[s[19]||(s[19]=t("p",null,"Penalty:",-1)),t("p",at,"₱"+e(n.value.penalty),1)])]),t("div",dt,[t("div",rt,[s[21]||(s[21]=t("p",null,"TOTAL:",-1)),t("p",pt,"₱"+e(a.value),1)]),t("div",ut,[s[22]||(s[22]=t("p",null,"CASH:",-1)),t("p",mt,"₱"+e(d.value),1)]),t("div",ct,[s[23]||(s[23]=t("p",null,"CHANGE:",-1)),t("p",gt,"₱"+e(g.value),1)])]),t("div",vt,[t("p",null,"Collector: "+e(h.value),1),s[24]||(s[24]=t("p",null,"-----------------------------",-1)),s[25]||(s[25]=t("p",{class:"font-bold"},"THIS SERVES AS YOUR",-1)),s[26]||(s[26]=t("p",{class:"font-bold"},"OFFICIAL RECEIPT",-1)),s[27]||(s[27]=t("p",null,"THANK YOU!",-1)),t("p",xt,e(new Date().toLocaleString()),1)])],512)])]))}};export{ht as default};
