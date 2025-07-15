// Define a type for multilingual fields
type MultilingualField = {
	de: string;
	[key: string]: string | undefined;
};

// Define the structure for event data from the API
interface APIEvent {
	name: MultilingualField;
	slug: string;
	live: boolean;
	testmode: boolean;
	currency: string;
	date_from: string;
	date_to: string | null;
	date_admission: string | null;
	is_public: boolean;
	presale_start: string | null;
	presale_end: string | null;
	location: MultilingualField;
	geo_lat: number | null;
	geo_lon: number | null;
	has_subevents: boolean;
	meta_data: Record<string, string>;
	seating_plan: string | null;
	plugins: string[];
	seat_category_mapping: Record<string, unknown>;
	timezone: string;
	item_meta_properties: Record<string, unknown>;
	all_sales_channels: boolean;
	limit_sales_channels: string[];
	public_url: string;
	sales_channels: string[];

	// From /settings:
	frontpage_text: MultilingualField;
	event_info_text: MultilingualField;
	logo_image: string;
	og_image: string | null;

	// Allow any other props just in case
	[key: string]: unknown;
}

interface ScrollSectionItem {
	index: number;
	label: string;
	title: string;
	slug: string;
	quote: string;
	image: string;
	alt: string;
	gradientClass: string;
	reverse?: boolean;
}
