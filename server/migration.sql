DROP TABLE IF EXISTS phone_contacts();

CREATE TABLE phone_contacts(
contact_id SERIAL,
first_name TEXT,
last_name TEXT,
company TEXT,
phone_number VARCHAR,
email VARCHAR,
favorited BOOLEAN
);

INSERT INTO phone_contacts (first_name, last_name, company, phone_number, email, favorited) VALUES ('Vanessa', 'Godiron', 'City of Tacoma', '301-867-5555', 'vanessa.swindell@tacoma.org', false);
INSERT INTO phone_contacts (first_name, last_name, company, phone_number, email, favorited) VALUES ('Lexi', 'Palidrone', 'DoD', '301-867-5555', 'lexy.n.swindell.mil@fake.mil', false);
INSERT INTO phone_contacts (first_name, last_name, company, phone_number, email, favorited) VALUES ('Jason', 'Mamoa', 'Pacific Ocean', '301-867-5555', 'jason.waterabs@fishsmell.gov', false);
INSERT INTO phone_contacts (first_name, last_name, company, phone_number, email, favorited) VALUES ('Curtis', 'Musk', 'Mars Corp', '301-867-5555', 'c.notRelated2Elon@marscorp.mars', false);
INSERT INTO phone_contacts (first_name, last_name, company, phone_number, email, favorited) VALUES ('Elon', 'Musk', 'SpaceX', '301-867-5555', 'elon.ceo@spacex.com', false);
INSERT INTO phone_contacts (first_name, last_name, company, phone_number, email, favorited) VALUES ('Jeff', 'Bezos', 'Blue Origin', '301-867-5555', 'jb@pluto.pluto', false);





