<form id="fpp-hn-form" enctype="multipart/form-data" style="display:none;">
  <input type="text" name="website" style="display:none" tabindex="-1" autocomplete="off">
  <input type="text" name="full_name" placeholder="ФИО заявителя" required>
  <input type="email" name="email" placeholder="Email" required>
  <input type="text" name="phone" placeholder="Телефон" required>
  <input type="text" name="region" placeholder="Регион" required>
  <input type="text" name="role" placeholder="Роль заявителя">
  <input type="text" name="category" placeholder="Категория обращения" required>
  <textarea name="description" placeholder="Краткое описание ситуации"></textarea>
  <div id="fpp-hn-dynamic-fields"></div>
  <input type="file" name="attachments[]" multiple>
  <label><input type="checkbox" name="consent_pd" required> Согласие на обработку персональных данных</label>
  <label><input type="checkbox" name="consent_rules" required> Согласие с правилами обращения</label>
  <button type="submit">Отправить</button>
</form>
<div id="fpp-hn-result"></div>
