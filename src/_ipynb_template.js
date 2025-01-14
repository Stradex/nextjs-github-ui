import {fetch_txt} from '@/lib/fetch-data'
import { ASCIItoUTF8 } from "@/lib/parse-data.mjs";

let siteSrc_;
async function getJupyterSiteSrc(apath) {
	if (apath=='') return [];
	if(! siteSrc_) {
		siteSrc_ = await fetch_txt(apath);
	}
	return siteSrc_;
}

export async function generateMetadata() {
	let htmlSrc = await getJupyterSiteSrc(__dirname+'/jupyter.html');
	let siteTitle = ASCIItoUTF8((htmlSrc.match(/<h1.*?>(.*?)(<a.*?<\/a>)?<\/h1>/)||[])[1] || (htmlSrc.match(/<title>([^<]*)/)||[])[1]);
	return {
	  title: siteTitle,
	  other: {
		blog_title: siteTitle
	  }
	};
};

export default async function Page() {
	let src= await getJupyterSiteSrc(__dirname+'/jupyter.html')
	return (<div
      dangerouslySetInnerHTML={{__html: src}}
    />)
}