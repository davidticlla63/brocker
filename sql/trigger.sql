CREATE FUNCTION concluir_poliza() RETURNS trigger AS $concluir_poliza$
    BEGIN       
		update poliza set estado='CON' WHERE polizaid=new.polizaid and tipoemision<>'Anexo Conclusion';
		update poliza set estado='CON' WHERE id=new.polizaid;
        RETURN NEW;
    END;
$concluir_poliza$ LANGUAGE plpgsql;


CREATE TRIGGER tr_concluir_poliza
  BEFORE INSERT
  ON poliza
  FOR EACH ROW
  EXECUTE PROCEDURE concluir_poliza();



