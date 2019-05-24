import { blogs } from '@/constants/docs'

import Agent from '@/docs/blogs/agent.md'
import Aop from '@/docs/blogs/aop.md'
import FeCommunication from '@/docs/blogs/fe-communication.md'
import FeFramework from '@/docs/blogs/fe-framework.md'
import PyramidPrinciple from '@/docs/blogs/pyramid-principle.md'
import ScriptLabel from '@/docs/blogs/script-label.md'
import Sri from '@/docs/blogs/sri.md'
import TimeManagement from '@/docs/blogs/time-management.md'
import UnifiedStylingLanguage from '@/docs/blogs/unified-styling-language.md'

let _components = {
	Agent,
	Aop,
	FeCommunication,
	FeFramework,
	PyramidPrinciple,
	ScriptLabel,
	Sri,
	TimeManagement,
	UnifiedStylingLanguage
}


let _docsRoutes = []
function toUpperCaseKey(str) {  
  return str.toLowerCase().replace(/( |^|-)[a-z]/g, (L) => L.toUpperCase()).replace(/-/g, '')
}
blogs.forEach(blog => {
  _docsRoutes.push(
  	{
	    path: blog.name,
	    name: blog.name,
	    component: _components[toUpperCaseKey(blog.name)]
	  },
  )
})

export default _docsRoutes
