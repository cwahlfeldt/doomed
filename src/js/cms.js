//
// CMS Extensions

import CMS from "netlify-cms";
import PostPreview from "./admin/preview/Post";

// editor imports
import './admin/editor/Youtube';

// custom widgets
import ColorControl from './admin/widgets/ColorControl';

CMS.registerWidget('color', ColorControl)
CMS.registerPreviewStyle("/css/main.css");
CMS.registerPreviewTemplate("posts", PostPreview);
