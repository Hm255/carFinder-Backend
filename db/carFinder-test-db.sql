--
-- PostgreSQL database dump
--

-- Dumped from database version 17.3
-- Dumped by pg_dump version 17.3

-- Started on 2025-02-23 10:46:16

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 218 (class 1259 OID 16558)
-- Name: carmakes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.carmakes (
    make_id integer NOT NULL,
    make_name character varying(50) NOT NULL
);


ALTER TABLE public.carmakes OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16557)
-- Name: carmakes_make_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.carmakes_make_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.carmakes_make_id_seq OWNER TO postgres;

--
-- TOC entry 4967 (class 0 OID 0)
-- Dependencies: 217
-- Name: carmakes_make_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.carmakes_make_id_seq OWNED BY public.carmakes.make_id;


--
-- TOC entry 220 (class 1259 OID 16567)
-- Name: carmodels; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.carmodels (
    model_id integer NOT NULL,
    model_name character varying(50) NOT NULL,
    make_id integer
);


ALTER TABLE public.carmodels OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16566)
-- Name: carmodels_model_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.carmodels_model_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.carmodels_model_id_seq OWNER TO postgres;

--
-- TOC entry 4968 (class 0 OID 0)
-- Dependencies: 219
-- Name: carmodels_model_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.carmodels_model_id_seq OWNED BY public.carmodels.model_id;


--
-- TOC entry 221 (class 1259 OID 16578)
-- Name: cars; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cars (
    registration_number character(7) NOT NULL,
    make_id integer,
    model_id integer,
    color character varying(30),
    engine_size integer,
    year_of_manufacture integer,
    date_of_manufacture date,
    co2_emissions integer,
    tax_due_date date,
    date_of_last_v5c_issued date,
    first_used_date date,
    marked_for_export boolean,
    has_outstanding_recall boolean NOT NULL,
    type_approval character varying(10),
    fuel_type_id integer,
    tax_status_id integer,
    wheel_plan_id integer,
    power_output integer
);


ALTER TABLE public.cars OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16594)
-- Name: fueltypes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.fueltypes (
    fuel_type_id integer NOT NULL,
    fuel_type_name character varying(30) NOT NULL
);


ALTER TABLE public.fueltypes OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 16593)
-- Name: fueltypes_fuel_type_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.fueltypes_fuel_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.fueltypes_fuel_type_id_seq OWNER TO postgres;

--
-- TOC entry 4969 (class 0 OID 0)
-- Dependencies: 222
-- Name: fueltypes_fuel_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.fueltypes_fuel_type_id_seq OWNED BY public.fueltypes.fuel_type_id;


--
-- TOC entry 225 (class 1259 OID 16603)
-- Name: taxstatuses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.taxstatuses (
    tax_status_id integer NOT NULL,
    tax_status_name character varying(20) NOT NULL
);


ALTER TABLE public.taxstatuses OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 16602)
-- Name: taxstatuses_tax_status_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.taxstatuses_tax_status_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.taxstatuses_tax_status_id_seq OWNER TO postgres;

--
-- TOC entry 4970 (class 0 OID 0)
-- Dependencies: 224
-- Name: taxstatuses_tax_status_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.taxstatuses_tax_status_id_seq OWNED BY public.taxstatuses.tax_status_id;


--
-- TOC entry 227 (class 1259 OID 16612)
-- Name: wheelplans; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.wheelplans (
    wheel_plan_id integer NOT NULL,
    wheel_plan_name character varying(50) NOT NULL
);


ALTER TABLE public.wheelplans OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 16611)
-- Name: wheelplans_wheel_plan_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.wheelplans_wheel_plan_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.wheelplans_wheel_plan_id_seq OWNER TO postgres;

--
-- TOC entry 4971 (class 0 OID 0)
-- Dependencies: 226
-- Name: wheelplans_wheel_plan_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.wheelplans_wheel_plan_id_seq OWNED BY public.wheelplans.wheel_plan_id;


--
-- TOC entry 4766 (class 2604 OID 16561)
-- Name: carmakes make_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carmakes ALTER COLUMN make_id SET DEFAULT nextval('public.carmakes_make_id_seq'::regclass);


--
-- TOC entry 4767 (class 2604 OID 16570)
-- Name: carmodels model_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carmodels ALTER COLUMN model_id SET DEFAULT nextval('public.carmodels_model_id_seq'::regclass);


--
-- TOC entry 4768 (class 2604 OID 16597)
-- Name: fueltypes fuel_type_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.fueltypes ALTER COLUMN fuel_type_id SET DEFAULT nextval('public.fueltypes_fuel_type_id_seq'::regclass);


--
-- TOC entry 4769 (class 2604 OID 16606)
-- Name: taxstatuses tax_status_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.taxstatuses ALTER COLUMN tax_status_id SET DEFAULT nextval('public.taxstatuses_tax_status_id_seq'::regclass);


--
-- TOC entry 4770 (class 2604 OID 16615)
-- Name: wheelplans wheel_plan_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.wheelplans ALTER COLUMN wheel_plan_id SET DEFAULT nextval('public.wheelplans_wheel_plan_id_seq'::regclass);


--
-- TOC entry 4952 (class 0 OID 16558)
-- Dependencies: 218
-- Data for Name: carmakes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.carmakes (make_id, make_name) FROM stdin;
1	Tesla
2	Ford
\.


--
-- TOC entry 4954 (class 0 OID 16567)
-- Dependencies: 220
-- Data for Name: carmodels; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.carmodels (model_id, model_name, make_id) FROM stdin;
2	Focus	2
1	Tesla Model Y long range AWD	1
\.


--
-- TOC entry 4955 (class 0 OID 16578)
-- Dependencies: 221
-- Data for Name: cars; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cars (registration_number, make_id, model_id, color, engine_size, year_of_manufacture, date_of_manufacture, co2_emissions, tax_due_date, date_of_last_v5c_issued, first_used_date, marked_for_export, has_outstanding_recall, type_approval, fuel_type_id, tax_status_id, wheel_plan_id, power_output) FROM stdin;
TESLA12	1	2	White	0	2023	2023-07-15	0	2024-07-15	2023-07-15	2023-07-15	f	f	M1	1	1	11	384
\.


--
-- TOC entry 4957 (class 0 OID 16594)
-- Dependencies: 223
-- Data for Name: fueltypes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.fueltypes (fuel_type_id, fuel_type_name) FROM stdin;
1	ELECTRICITY
2	PETROL
3	DIESEL
\.


--
-- TOC entry 4959 (class 0 OID 16603)
-- Dependencies: 225
-- Data for Name: taxstatuses; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.taxstatuses (tax_status_id, tax_status_name) FROM stdin;
1	Yes
0	No
\.


--
-- TOC entry 4961 (class 0 OID 16612)
-- Dependencies: 227
-- Data for Name: wheelplans; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.wheelplans (wheel_plan_id, wheel_plan_name) FROM stdin;
1	2 WHEEL
2	3 WHEEL
3	2 AXLE RIGID BODY
4	3 AXLE RIGID BODY
5	4 AXLE RIGID BODY
6	2 AXLE ARTICULATED
7	3 AXLE ARTICULATED
8	4 AXLE ARTICULATED
9	3 WHEEL DRIVE
10	4 WHEEL DRIVE
11	ALL WHEEL DRIVE
12	6 WHEEL
13	6 WHEEL DRAWBAR
14	8 WHEEL RIGID BODY
15	LEFT-HAND DRIVE
16	QUADRICYCLE
17	TRAILER
18	SEMI-TRAILER
19	TRACTOR UNIT
20	OTHER
\.


--
-- TOC entry 4972 (class 0 OID 0)
-- Dependencies: 217
-- Name: carmakes_make_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.carmakes_make_id_seq', 2, true);


--
-- TOC entry 4973 (class 0 OID 0)
-- Dependencies: 219
-- Name: carmodels_model_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.carmodels_model_id_seq', 2, true);


--
-- TOC entry 4974 (class 0 OID 0)
-- Dependencies: 222
-- Name: fueltypes_fuel_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.fueltypes_fuel_type_id_seq', 3, true);


--
-- TOC entry 4975 (class 0 OID 0)
-- Dependencies: 224
-- Name: taxstatuses_tax_status_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.taxstatuses_tax_status_id_seq', 1, false);


--
-- TOC entry 4976 (class 0 OID 0)
-- Dependencies: 226
-- Name: wheelplans_wheel_plan_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.wheelplans_wheel_plan_id_seq', 1, false);


--
-- TOC entry 4772 (class 2606 OID 16565)
-- Name: carmakes carmakes_make_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carmakes
    ADD CONSTRAINT carmakes_make_name_key UNIQUE (make_name);


--
-- TOC entry 4774 (class 2606 OID 16563)
-- Name: carmakes carmakes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carmakes
    ADD CONSTRAINT carmakes_pkey PRIMARY KEY (make_id);


--
-- TOC entry 4776 (class 2606 OID 16572)
-- Name: carmodels carmodels_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carmodels
    ADD CONSTRAINT carmodels_pkey PRIMARY KEY (model_id);


--
-- TOC entry 4778 (class 2606 OID 16645)
-- Name: cars cars_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cars
    ADD CONSTRAINT cars_pkey PRIMARY KEY (registration_number);


--
-- TOC entry 4789 (class 2606 OID 16601)
-- Name: fueltypes fueltypes_fuel_type_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.fueltypes
    ADD CONSTRAINT fueltypes_fuel_type_name_key UNIQUE (fuel_type_name);


--
-- TOC entry 4791 (class 2606 OID 16599)
-- Name: fueltypes fueltypes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.fueltypes
    ADD CONSTRAINT fueltypes_pkey PRIMARY KEY (fuel_type_id);


--
-- TOC entry 4793 (class 2606 OID 16608)
-- Name: taxstatuses taxstatuses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.taxstatuses
    ADD CONSTRAINT taxstatuses_pkey PRIMARY KEY (tax_status_id);


--
-- TOC entry 4795 (class 2606 OID 16610)
-- Name: taxstatuses taxstatuses_tax_status_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.taxstatuses
    ADD CONSTRAINT taxstatuses_tax_status_name_key UNIQUE (tax_status_name);


--
-- TOC entry 4797 (class 2606 OID 16617)
-- Name: wheelplans wheelplans_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.wheelplans
    ADD CONSTRAINT wheelplans_pkey PRIMARY KEY (wheel_plan_id);


--
-- TOC entry 4799 (class 2606 OID 16619)
-- Name: wheelplans wheelplans_wheel_plan_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.wheelplans
    ADD CONSTRAINT wheelplans_wheel_plan_name_key UNIQUE (wheel_plan_name);


--
-- TOC entry 4779 (class 1259 OID 16640)
-- Name: idx_cars_co2_emissions; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_cars_co2_emissions ON public.cars USING btree (co2_emissions);


--
-- TOC entry 4780 (class 1259 OID 16637)
-- Name: idx_cars_color; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_cars_color ON public.cars USING btree (color);


--
-- TOC entry 4781 (class 1259 OID 16638)
-- Name: idx_cars_engine_size; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_cars_engine_size ON public.cars USING btree (engine_size);


--
-- TOC entry 4782 (class 1259 OID 16642)
-- Name: idx_cars_first_used_date; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_cars_first_used_date ON public.cars USING btree (first_used_date);


--
-- TOC entry 4783 (class 1259 OID 16635)
-- Name: idx_cars_make_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_cars_make_id ON public.cars USING btree (make_id);


--
-- TOC entry 4784 (class 1259 OID 16636)
-- Name: idx_cars_model_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_cars_model_id ON public.cars USING btree (model_id);


--
-- TOC entry 4785 (class 1259 OID 16646)
-- Name: idx_cars_outstanding_recall; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_cars_outstanding_recall ON public.cars USING btree (registration_number) WHERE (has_outstanding_recall = true);


--
-- TOC entry 4786 (class 1259 OID 16641)
-- Name: idx_cars_tax_due_date; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_cars_tax_due_date ON public.cars USING btree (tax_due_date);


--
-- TOC entry 4787 (class 1259 OID 16639)
-- Name: idx_cars_year_of_manufacture; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_cars_year_of_manufacture ON public.cars USING btree (year_of_manufacture);


--
-- TOC entry 4800 (class 2606 OID 16573)
-- Name: carmodels carmodels_make_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carmodels
    ADD CONSTRAINT carmodels_make_id_fkey FOREIGN KEY (make_id) REFERENCES public.carmakes(make_id);


--
-- TOC entry 4801 (class 2606 OID 16620)
-- Name: cars cars_fuel_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cars
    ADD CONSTRAINT cars_fuel_type_id_fkey FOREIGN KEY (fuel_type_id) REFERENCES public.fueltypes(fuel_type_id);


--
-- TOC entry 4802 (class 2606 OID 16583)
-- Name: cars cars_make_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cars
    ADD CONSTRAINT cars_make_id_fkey FOREIGN KEY (make_id) REFERENCES public.carmakes(make_id);


--
-- TOC entry 4803 (class 2606 OID 16588)
-- Name: cars cars_model_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cars
    ADD CONSTRAINT cars_model_id_fkey FOREIGN KEY (model_id) REFERENCES public.carmodels(model_id);


--
-- TOC entry 4804 (class 2606 OID 16625)
-- Name: cars cars_tax_status_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cars
    ADD CONSTRAINT cars_tax_status_id_fkey FOREIGN KEY (tax_status_id) REFERENCES public.taxstatuses(tax_status_id);


--
-- TOC entry 4805 (class 2606 OID 16630)
-- Name: cars cars_wheel_plan_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cars
    ADD CONSTRAINT cars_wheel_plan_id_fkey FOREIGN KEY (wheel_plan_id) REFERENCES public.wheelplans(wheel_plan_id);


-- Completed on 2025-02-23 10:46:16

--
-- PostgreSQL database dump complete
--

