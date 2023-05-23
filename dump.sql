--
-- PostgreSQL database dump
--

-- Dumped from database version 12.14 (Ubuntu 12.14-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.14 (Ubuntu 12.14-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
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
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    token text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    "shortUrl" text NOT NULL,
    url text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "visitCount" integer,
    "userId" integer NOT NULL
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4NDc3NzY1OSwiZXhwIjoxNjg3MzY5NjU5fQ.bSHRPMMTErSdb3rlVPAvd7xn6E4oSNy8B0ctTe_q_ys', '2023-05-22 15:11:01.944431');
INSERT INTO public.sessions VALUES (2, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4NDc4ODAzOCwiZXhwIjoxNjg3MzgwMDM4fQ.R6zTx0J-I9hbhitDqLMefpvT5HQdjzOFrUU9WvOGrxc', '2023-05-22 17:40:38.63007');
INSERT INTO public.sessions VALUES (3, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4NDc5NzQ4NSwiZXhwIjoxNjg3Mzg5NDg1fQ.mrMuLCfcqlSM_FLpgAro_2RcVG57UuBR9_kfo9je_uw', '2023-05-22 20:18:05.612811');
INSERT INTO public.sessions VALUES (4, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4NDc5ODIzOSwiZXhwIjoxNjg3MzkwMjM5fQ.ph6Nlmu-DzpCZ96mHkEXlSovDevb5n31YIWtEX6xScU', '2023-05-22 20:30:39.540323');
INSERT INTO public.sessions VALUES (5, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4NDc5OTI2MiwiZXhwIjoxNjg3MzkxMjYyfQ.rZ64cZJYx3a8VmOchHk-a7WBvO_yNo6ISq-_B8Sbn-A', '2023-05-22 20:47:42.696935');
INSERT INTO public.sessions VALUES (6, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4NDgwMDA3NCwiZXhwIjoxNjg3MzkyMDc0fQ.7AHQYI62Q0XvQFUjQGvvaWMUIn0OELyMGhUaNAgqNH8', '2023-05-22 21:01:14.246337');
INSERT INTO public.sessions VALUES (7, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4NDgwMDgyNiwiZXhwIjoxNjg3MzkyODI2fQ.LMbS0o-DAIbUT8uTn1WA0DkXERh_oBeCLxyk2-bYEwU', '2023-05-22 21:13:46.776491');
INSERT INTO public.sessions VALUES (8, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4NDgwMTMyNiwiZXhwIjoxNjg3MzkzMzI2fQ.6qREFDt7ll2BwCooa_ZpLu9qz8NxruxtIaNfRxUgT0k', '2023-05-22 21:22:06.970074');


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (1, 'PRFeh_LQaS', 'https://www.w3schools.com/sql/sql_alter.asp', '2023-05-22 21:30:42.550564', 0, 1);
INSERT INTO public.urls VALUES (2, 'OpRufRsOnF', 'https://www.w3schools.com/sql/sql_alter.asp', '2023-05-22 21:31:24.5027', 0, 1);
INSERT INTO public.urls VALUES (3, 'EB2ysn_lT1', 'https://www.w3schools.com/sql/sql_alter.asp', '2023-05-22 21:32:06.026682', 0, 1);
INSERT INTO public.urls VALUES (4, '6wOSZhO7r0', 'https://www.w3schools.com/sql/sql_alter.asp', '2023-05-22 21:32:52.876228', 0, 1);
INSERT INTO public.urls VALUES (5, 'RgFJrwRYvA', 'https://www.w3schools.com/sql/sql_alter.asp', '2023-05-22 21:34:38.546834', 0, 1);
INSERT INTO public.urls VALUES (6, 'jeEUpMITwS', 'https://www.w3schools.com/sql/sql_alter.asp', '2023-05-22 21:35:23.171856', 0, 1);
INSERT INTO public.urls VALUES (7, 'GheQfotxi3', 'https://www.w3schools.com/sql/sql_alter.asp', '2023-05-22 21:35:56.073778', 0, 1);
INSERT INTO public.urls VALUES (8, 'Hgw0dfzsCF', 'https://www.w3schools.com/sql/sql_alter.asp', '2023-05-22 21:36:53.498115', 0, 1);
INSERT INTO public.urls VALUES (9, 'MPN9K3il3Q', 'https://www.w3schools.com/sql/sql_alter.asp', '2023-05-22 21:37:27.073781', 0, 1);
INSERT INTO public.urls VALUES (10, '2fAe15ooWJ', 'https://www.w3schools.com/sql/sql_alter.asp', '2023-05-22 21:37:48.814555', 0, 1);
INSERT INTO public.urls VALUES (11, 'wg47Wa3kBD', 'https://www.w3schools.com/sql/sql_alter.asp', '2023-05-22 21:38:02.498838', 0, 1);
INSERT INTO public.urls VALUES (12, '3G9CExevgO', 'https://www.w3schools.com/sql/sql_alter.asp', '2023-05-22 21:38:34.624682', 0, 1);
INSERT INTO public.urls VALUES (13, 'joOo52slpZ', 'https://www.w3schools.com/sql/sql_alter.asp', '2023-05-22 21:38:55.836485', 0, 1);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'kaka', 'kala@kaka.com', '$2b$04$uSSHsoFzvgWOQMHGD.V7E.O5PtXMNyTYoMRjwSHCEo/drk4XS/v7C', '2023-05-22 14:41:58.313948');
INSERT INTO public.users VALUES (2, 'kaka', 'kamaa@kaka.com', '$2b$04$UvqHdcHyf5gwp9RsHqXh/.ILGzBQI5KwbYpbt4vhstDuOLBhxd2E.', '2023-05-22 19:52:07.688184');


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 8, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 13, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 2, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

