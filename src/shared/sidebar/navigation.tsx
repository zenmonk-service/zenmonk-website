import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menu-item";

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

export const Navigation = () => (
	<motion.ul
    className="sidebar-menu"
		variants={variants}
	>
		{[0, 1, 2, 3, 4].map((i) => (
			<MenuItem i={i} key={i} />
		))}
	</motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
