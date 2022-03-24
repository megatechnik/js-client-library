export type AccountRead = {
  signupform_username?: string;
  signupform_companyname?: string;
  signupform_firstname?: string;
  signupform_lastname?: string;
  signupform_email?: string;
  signupform_street?: string;
  signupform_zipcode?: string;
  signupform_city?: string;
  signupform_country_id?: string;
  vat_number?: string;
  payment_option?: string;
  technical_contact_email?: string;
  email_billing_1?: string;
  salutation_id?: string;
  demoaccount_until: string;
  paid_version: string;
};

export type Account = AccountRead;

export interface AccountUpdate extends Partial<AccountRead> {
  delete_demo_data: boolean;
}
