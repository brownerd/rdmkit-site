import vrt from "rdmkit-vrt";
import rdm from "rdmkit-rdm";

import "prismjs";

var runVert = vrt({ belowColor: "#ccc" });

// runVert({ belowColor: "#ccc" });
rdm(".resize");
// rdm(".feature, figure, .textarea, .resize");

setTimeout(() => {
  runVert.belowGrid();
}, 500);

// rdm(
//   ".img, .audio, .video, .canvas, .svg, .iframe, .textarea, .feature, figure"
// );
