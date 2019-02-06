DROP DATABASE IF EXISTS brew_db;
CREATE DATABASE brew_db;

USE brew_db;


CREATE TABLE brew_log
(	id int NOT NULL AUTO_INCREMENT,
	brand varchar(255),
	batch_number INTEGER,
	brewer_name varchar(255),
	fermenter INTEGER,
	brew_date DATE,

	ingreedient_1 varchar(255),
	ingreedient_1_weight DECIMAL(6,2),
	ingreedient_2 varchar(255),
	ingreedient_2_weight DECIMAL(6,2),
	ingreedient_3 varchar(255),
	ingreedient_3_weight DECIMAL(6,2),
	ingreedient_4 varchar(255),
	ingreedient_4_weight DECIMAL(6,2),
	ingreedient_5 varchar(255),
	ingreedient_5_weight DECIMAL(6,2),
	zinc_weight DECIMAL(6,2),
	wirlfloc_weight DECIMAL(6,2),
	CaCl2_weight DECIMAL(6,2),
	CoSo4_weight DECIMAL(6,2),

	hop_1 varchar(255),
	hop_1_weight DECIMAL(6,2),
	hop_1_boil INTEGER,
	hop_2 varchar(255),
	hop_2_weight DECIMAL(6,2),
	hop_2_boil INTEGER,
	hop_3 varchar(255),
	hop_3_weight DECIMAL(6,2),
	hop_3_boil INTEGER,
	hop_4 varchar(255),
	hop_4_weight DECIMAL(6,2),
	hop_4_boil INTEGER,
	hop_5 varchar(255),
	hop_5_weight DECIMAL(6,2),
	hop_5_boil INTEGER,

	dryhop_1 varchar(255),
	dryhop_1_weight DECIMAL(6,2),
	dryhop_2 varchar(255),
	dryhop_2_weight DECIMAL(6,2),
	dryhop_3 varchar(255),
	dryhop_3_weight DECIMAL(6,2),
	drhop_date DATE,

	mash_water_vol DECIMAL(6,2),
	strike_temp DECIMAL(6,2),
	mash_temp DECIMAL(6,2),
	all_in_time varchar(255),
	vorlof_start_time varchar(255),
	lauter_start_time varchar(255),
	sparge_start_time varchar(255),
	sparge_stop_time varchar(255),
	lauter_stop_time varchar(255),
	sparge_water_vol DECIMAL(6,2),
	kettle_full_vol DECIMAL(6,2),
	preboil_gravity DECIMAL(6,2),
	boil_start_time varchar(255),

	whirlpool_start_time varchar(255),
	whirlpool_stop_time varchar(255),
	knock_out_start varchar(255),
	Knock_out_stop varchar(255),
	knock_out_temp DECIMAL(6,2),
	o2_lpm DECIMAL(6,2),
	yeast_name varchar(255),
	yeast_gen INTEGER,
	pitch_vol varchar(255),
	fv_temp varchar(255),
	postboil_gravity varchar(255),

	stage INTEGER,

	vol_units varchar(255),

	cellering_date DATE,
	dry_hop_date DATE,

	transfer_date DATE,
	transfer_vol DECIMAL(6,2),
	keg_date DATE,
	keg_vol DECIMAL(6,2),
	PRIMARY KEY (id)
);