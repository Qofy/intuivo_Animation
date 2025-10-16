import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Index() {
	return (
		<div className="min-h-screen bg-[#e0e0e0] flex items-center justify-center p-6">
			<div className="neumorphic-card p-8 max-w-md w-full">
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-primary mb-2">index</h1>
					<p className="text-secondary">Change me</p>
				</div>
			</div>
		</div>
	);
}
